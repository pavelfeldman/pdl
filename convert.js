const fs = require('fs')

convert('browser');
convert('js');

function convert(name) {
  fs.readFile(name + '_protocol.json', 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }
    const protocol = JSON.parse(data);
    const result = [];
    result.push('# Protocol definition generated from ' + name + '_protocol.json');
    for (let domain of protocol.domains) {
      result.push(``);
      printDescription(result, domain.description, ``);
      result.push(`${domain.experimental ? 'experimental ' : ''}domain ${domain.domain}`);
      (domain.types || []).forEach(type => printType(result, type));
      (domain.commands || []).forEach(command => printCommand(result, command));
      (domain.events || []).forEach(event => printEvent(result, event));
    }
    result.push('');
    fs.writeFile(name + '_protocol.pdl', result.join('\n'), () => {});
  });
}

function printType(result, type) {
  result.push(``);
  printDescription(result, type.description, `  `);
  result.push(`  ${type.experimental ? 'experimental ' : ''}type ${type.id} extends ${type.type}`);
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
  result.push(`  ${command.experimental ? 'experimental ' : ''}command ${command.name}`);
  if (command.redirect)
    result.push(`    # Use '${command.redirect}.${command.name}' instead`);
  if (command.deprecated)
    result.push(`    deprecated`);
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
  result.push(`  ${event.experimental ? 'experimental ' : ''}event ${event.name}`);
  if (event.deprecated)
    result.push(`    deprecated`);
  if (event.parameters && event.parameters.length) {
    result.push(`    parameters`);
    event.parameters.forEach(param => printParam(result, param));
  }
}

function printParam(result, param) {
  printDescription(result, param.description, `      `);
  let type = param['$ref'] || param.type;
  if (param.type === 'array')
    type = `array of ${param.items['$ref'] || param.items.type}`;
  result.push(`      ${param.experimental ? 'experimental ' : ''}${param.optional ? 'optional ' : ''}${type} ${param.name}`);
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

