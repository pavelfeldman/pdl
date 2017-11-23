const fs = require('fs')
fs.readFile('browser_protocol.json', 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  const protocol = JSON.parse(data);
  const result = [];
  for (let domain of protocol.domains) {
    result.push(``);
    if (domain.description)
      result.push(`# ${domain.description}`);
    result.push(`${domain.experimental ? 'experimental ' : ''}domain ${domain.domain}`);
    (domain.types || []).forEach(type => printType(result, type));
    (domain.commands || []).forEach(command => printCommand(result, command));
    (domain.events || []).forEach(event => printEvent(result, event));
  }
  console.log(result.join('\n'));
});

function printType(result, type) {
  result.push(``);
  if (type.description)
    result.push(`  # ${type.description}`);
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
  if (command.description)
    result.push(`  # ${command.description}`);
  result.push(`  ${command.experimental ? 'experimental ' : ''}command ${command.name}`);
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
  if (event.description)
    result.push(`  # ${event.description}`);
  result.push(`  ${event.experimental ? 'experimental ' : ''}event ${event.name}`);
  if (event.parameters && event.parameters.length) {
    result.push(`    parameters`);
    event.parameters.forEach(param => printParam(result, param));
  }
}

function printParam(result, param) {
  if (param.description)
    result.push(`      # ${param.description}`);
  let type = param['$ref'] || param.type;
  if (param.type === 'array')
    type = `array of ${param.items['$ref'] || param.items.type}`;
  result.push(`      ${param.experimental ? 'experimental ' : ''}${param.optional ? 'optional ' : ''}${type} ${param.name}`);
}

function printEnumLiteral(result, literal) {
  result.push(`      ${literal}`);
}
