const fs = require('fs')

fs.readFile('js_protocol.pdl', 'utf8', (err, data) => {
  const js_schema = parse(data);
  fs.readFile('browser_protocol.pdl', 'utf8', (err, data) => {
    const browser_schema = parse(data);
    markdown({domains: js_schema.domains.concat(browser_schema.domains)});
  });
});

let description;

const primitiveTypes = new Set(['integer', 'number', 'boolean', 'string', 'object', 'any', 'array']);

function assignType(item, type, isArray) {
  if (isArray) {
    item.type = 'array';
    item.items = {};
    assignType(item.items, type);
    return;
  }
  if (type === 'enum')
    type = 'string';
  if (primitiveTypes.has(type))
    item.type = type;
  else
    item['$ref'] = type;
}

function createItem(experimental, deprecated, name) {
  const result = {};
  if (experimental)
    result.experimental = true;
  if (deprecated)
    result.deprecated = true;
  if (name)
    result.name = name;
  if (description)
    result.description = description.trim();
  return result;
}

function parse(data) {
  const protocol = { domains: [], version: {} };
  let domain;
  let item;
  let subitems;
  let nukeDescription = false;
  const lines = data.split('\n');
  for (let i = 0; i < lines.length; ++i) {
    if (nukeDescription) {
      description = '';
      nukeDescription = false;
    }
    const line = lines[i];
    const trimLine = line.trim();

    if (trimLine.startsWith('#')) {
      description += '\n' + trimLine.substring(2);
      continue;
    } else {
      nukeDescription = true;
    }

    if (!trimLine)
      continue;

    let match = line.match(/^(experimental )?(deprecated )?domain (.*)/);
    if (match) {
      domain = createItem(match[1], match[2]);
      domain.domain = match[3];
      protocol.domains.push(domain);
      continue;
    }

    match = line.match(/^  depends on ([^\s]+)/);
    if (match) {
      if (!domain.dependencies)
        domain.dependencies = [];
      domain.dependencies.push(match[1]);
      continue;
    }

    match = line.match(/^  (experimental )?(deprecated )?type (.*) extends (array of )?([^\s]+)?/);
    if (match) {
      if (!domain.types)
        domain.types = [];
      item = createItem(match[1], match[2]);
      item.id = match[3];
      assignType(item, match[5], match[4]);
      domain.types.push(item);
      continue;
    }

    match = line.match(/^  (experimental )?(deprecated )?(command|event) (.*)/);
    if (match) {
      let list;
      if (match[3] === 'command') {
        list = domain.commands;
        if (!list)
        list = domain.commands = [];
      } else {
        list = domain.events;
        if (!list)
        list = domain.events = [];
      }
      item = createItem(match[1], match[2], match[4]);
      list.push(item);
      continue;
    }

    match = line.match(/^      (experimental )?(deprecated )?(optional )?(array of )?([^\s]+) ([^\s]+)/);
    if (match) {
      let param = createItem(match[1], match[2], match[6]);
      if (match[3])
        param.optional = true;
      assignType(param, match[5], match[4]);
      if (match[5] === 'enum')
        enumliterals = param.enum = [];
      subitems.push(param);
      continue;
    }

    match = line.match(/^    (parameters|returns|properties)/);
    if (match) {
      subitems = item[match[1]] = [];
      continue;
    }

    match = line.match(/^    enum/);
    if (match) {
      enumliterals = item.enum = [];
      continue;
    }

    match = line.match(/^version/);
    if (match)
      continue;

    match = line.match(/^  major (\d+)/);
    if (match) {
      protocol.version.major = match[1];
      continue;
    }

    match = line.match(/^  minor (\d+)/);
    if (match) {
      protocol.version.minor = match[1];
      continue;
    }

    match = line.match(/^    redirect ([^\s]+)/);
    if (match) {
      item.redirect = match[1];
      continue;
    }

    match = line.match(/^      (  )?[^\s]+$/);
    if (match) {
      // enum literal
      enumliterals.push(trimLine);
      continue;
    }
    console.log(`Error in line: ${i+1}, ${line}`);

  }
  return protocol;
}

function fqType(type, domain, usedTypes) {
  const result = type.includes('.') ? type : domain.domain + '.' + type;
  usedTypes.add(result);
  return result;
}

function mdType(parameter, domain, usedTypes) {
  if (parameter.type === 'array') {
    const items = parameter.items;
    return `<array of [${items.type ? items.type : fqType(items['$ref'], domain, usedTypes)}]>`;
  }
  return `<[${parameter.type ? parameter.type  : fqType(parameter['$ref'], domain, usedTypes)}]>`;
}

function formatDescription(item) {
  if (!item.description)
    return '';
  if (item.description.endsWith('.'))
    return item.description.substring(0, item.description.length -1);
  return item.description;
}

function supertype(domains, domainName, typeName) {
  for (let domain of domains) {
    if (domain.domain !== domainName)
      continue;
    for (let type of domain.types || []) {
      if (type.id !== typeName)
        continue;
      return type.type;
    }
  }
  return '';
}

function experimental(item) {
  return (item.experimental ? ' 🌱' : '') + (item.deprecated ? ' 🍂' : '');
}

function formatParameter(parameter, domain, usedTypes) {
  return `- ${parameter.optional ? '*optional* ' : ' '}\`${parameter.name}\` ${mdType(parameter, domain, usedTypes)}${experimental(parameter)} ${formatDescription(parameter)}`;
}

function markdown(schema) {
  for (let domain of schema.domains) {
    const result = [];
    const usedTypes = new Set();
    result.push(`\n### domain: ${domain.domain}${experimental(domain)}`);
    if (domain.description)
      result.push(`\n${domain.description}`);

    for (let type of (domain.types || [])) {
      result.push(`\n\n#### type: ${domain.domain}.${type.id} = ${type.type}`);
      if (type.description)
        result.push(`\n${type.description}`);
      if (type.properties && type.properties.length) {
        result.push(`\n*properties*`);
        for (let property of type.properties)
          result.push(formatParameter(property, domain, usedTypes));
      }
    }

    for (let command of (domain.commands || [])) {
      result.push(`\n\n#### command: ${domain.domain}.${command.name}()${experimental(command)}`);
      if (command.description)
        result.push(`\n${command.description}`);
      if (command.parameters && command.parameters.length) {
        result.push(`\n*parameters*`);
        for (let parameter of command.parameters)
          result.push(formatParameter(parameter, domain, usedTypes));
      }
      if (command.returns && command.returns.length) {
        result.push(`\n*returns*`);
        for (let parameter of command.returns)
          result.push(formatParameter(parameter, domain, usedTypes));
      }
    }

    for (let event of (domain.events || [])) {
      result.push(`\n\n#### event: ${domain.domain}.${event.name}${experimental(event)}`);
      if (event.description)
        result.push(`\n${event.description}`);
      if (event.parameters && event.parameters.length) {
        result.push(`\n*parameters*`);
        for (let parameter of event.parameters)
          result.push(formatParameter(parameter, domain, usedTypes));
      }
    }

    result.push(``);
    for (let type of usedTypes) {
      const [domain, name] = type.split('.');
      result.push(`[${type}]: ${domain.toLowerCase()}.md#type-${type.replace('.', '').toLowerCase()}--${supertype(schema.domains, domain, name)} "${type}"`);
    }
    result.push(`[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"`);
    result.push(`[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"`);
    result.push(`[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"`);
    result.push(`[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"`);
    result.push(`[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"`);
    result.push(`[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"`);

    fs.writeFileSync(`docs/${domain.domain.toLowerCase()}.md`, result.join('\n'));
  }
}
