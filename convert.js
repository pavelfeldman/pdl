const fs = require('fs')

convert('browser');
convert('js');

function stringCompare(nameA, nameB) {
  if (nameA < nameB)
    return -1;
  if (nameA > nameB)
    return 1;
  return 0;
}

function convert(name) {
  fs.readFile(name + '_protocol.json', 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }
    const protocol = JSON.parse(data);
    const result = [`# Copyright 2017 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

version
  major ${protocol.version.major}
  minor ${protocol.version.minor}`];
    protocol.domains.sort((a, b) => stringCompare(a.domain, b.domain));
    for (let domain of protocol.domains) {
      result.push(``);
      printDescription(result, domain.description, ``);
      result.push(`${domain.experimental ? 'experimental ' : ''}${domain.deprecated ? 'deprecated ' : ''}domain ${domain.domain}`);
      (domain.types || []).forEach(type => printType(result, type));

      if (domain.commands)
        domain.commands.sort((a, b) => stringCompare(a.name, b.name));
      (domain.commands || []).forEach(command => printCommand(result, command));

      if (domain.events)
        domain.events.sort((a, b) => stringCompare(a.name, b.name));
      (domain.events || []).forEach(event => printEvent(result, event));
    }
    result.push('');
    fs.writeFile(name + '_protocol.pdl', result.join('\n'), () => {});
  });
}

function printType(result, type) {
  result.push(``);
  printDescription(result, type.description, `  `);
  result.push(`  ${type.experimental ? 'experimental ' : ''}${type.deprecated ? 'deprecated ' : ''}type ${type.id} extends ${type.type}`);
  if (type.properties && type.properties.length) {
    result.push(`    properties`);
    type.properties.forEach(param => printParam(result, param));
  }
  if (type.enum && type.enum.length) {
    result.push(`    enum`);
    type.enum.forEach(literal => printEnumLiteral(result, literal));
  }
}

function printCommand(result, command) {
  result.push(``);
  printDescription(result, command.description, `  `);
  result.push(`  ${command.experimental ? 'experimental ' : ''}${command.deprecated ? 'deprecated ' : ''}command ${command.name}`);
  if (command.redirect)
    result.push(`    # Use '${command.redirect}.${command.name}' instead`);
  if (command.parameters && command.parameters.length) {
    result.push(`    parameters`);
    command.parameters.forEach(param => printParam(result, param));
  }
  if (command.returns && command.returns.length) {
    result.push(`    returns`);
    command.returns.forEach(param => printParam(result, param));
  }
}

function printEvent(result, event) {
  result.push(``);
  printDescription(result, event.description, `  `);
  result.push(`  ${event.experimental ? 'experimental ' : ''}${event.deprecated ? 'deprecated ' : ''}event ${event.name}`);
  if (event.parameters && event.parameters.length) {
    result.push(`    parameters`);
    event.parameters.forEach(param => printParam(result, param));
  }
}

function printParam(result, param) {
  printDescription(result, param.description, `      `);
  let type = param['$ref'] || param.type;
  if (type === 'string' && param.enum)
    type = 'enum';
  if (param.type === 'array')
    type = `array of ${param.items['$ref'] || param.items.type}`;
  result.push(`      ${param.experimental ? 'experimental ' : ''}${param.deprecated ? 'deprecated ' : ''}${param.optional ? 'optional ' : ''}${type} ${param.name}`);
  if (type === 'enum') {
    for (let literal of param.enum)
      result.push(`        ${literal}`);
  }
}

function printEnumLiteral(result, literal) {
  result.push(`      ${literal}`);
}

function printDescription(result, description, indent) {
  if (!description)
    return;
  description = description.replace(/<\/?code>/g, '`');
  let line = indent + '#';
  const tokens = description.split(' ');
  for (let token of description.split(' ')) {
    if (line.length + token.length + 1 > 100) {
      result.push(line);
      line = indent + '#';
    }
    line += ' ' + token;
  }
  result.push(line);
}

