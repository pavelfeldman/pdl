const fs = require('fs')
const marked = require('marked');
const highlight = require('highlight.js');

marked.setOptions({
  highlight: code => highlight.highlightAuto(code).value
});

fs.readFile('js_protocol.pdl', 'utf8', (err, data) => {
  const js_schema = parse(data);
  fs.readFile('browser_protocol.pdl', 'utf8', (err, data) => {
    const browser_schema = parse(data);
    const schema = {domains: js_schema.domains.concat(browser_schema.domains)};
    traceUsages(schema);
    markdown(schema);
    html(schema);
  });
});

// Generic JSON converter.

let description;

const primitiveTypes = new Set(['integer', 'number', 'boolean', 'string', 'object', 'any', 'array']);

function assignType(domainName, item, type, isArray) {
  if (isArray) {
    item.type = 'array';
    item.items = {};
    assignType(domainName, item.items, type);
    return;
  }
  if (type === 'enum')
    type = 'string';
  if (primitiveTypes.has(type)) {
    item.type = type;
  } else {
    if (!type.includes('.'))
      type = domainName + '.' + type;
    item['$ref'] = type;
  }
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
      assignType(domain.domain, item, match[5], match[4]);
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
      assignType(domain.domain, param, match[5], match[4]);
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

// Markdown generator

function traceUsages(schema) {
  const types = new Map();
  for (const domain of schema.domains) {
    domain.name = domain.domain;
    for (const type of (domain.types || [])) {
      type.usages = new Map();
      type.name = type.id;
      types.set(`${domain.name}.${type.name}`, type);
    }
  }

  for (const domain of schema.domains) {
    domain.usedTypes = [];
    for (const type of (domain.types || [])) {
      type.domain = domain;
      for (const param of type.properties || [])
        traceType(param, 'property of type', 'type', type);
    }
    for (const command of (domain.commands || [])) {
      command.domain = domain;
      for (const param of command.parameters || [])
        traceType(param, 'accepted by command', 'command', command);
      for (const param of command.returns || [])
        traceType(param, 'returned from command', 'command', command);
    }
    for (const event of (domain.events || [])) {
      event.domain = domain;
      for (const param of event.parameters || [])
        traceType(param, 'parameter in event', 'event', event);
    }
  }

  function traceType(param, usage, prefix, item) {
    const typeName = param['$ref'] || (param.items && param.items['$ref']);
    if (!typeName)
      return;
    const type = types.get(typeName);
    let usages = type.usages.get(usage);
    if (!usages) {
      usages = [];
      type.usages.set(usage, usages);
    }
    if (usages.find(x => x.item === item))
      return;
    usages.push({prefix, item});
    item.domain.usedTypes.push(type);
  }
}

function mdType(parameter) {
  if (parameter.type === 'array') {
    const items = parameter.items;
    return `<array of [${items.type ? items.type : items['$ref']}]>`;
  }
  return `<[${parameter.type ? parameter.type  : parameter['$ref']}]>`;
}

function formatDescription(item) {
  if (!item.description)
    return '';
  if (item.description.endsWith('.'))
    return item.description.substring(0, item.description.length -1);
  return item.description;
}

function experimental(item) {
  return (item.experimental ? ' 🌱' : '') + (item.deprecated ? ' 🍂' : '');
}

function formatParameter(parameter) {
  return `- ${parameter.optional ? '*optional* ' : ' '}\`${parameter.name}\` ${mdType(parameter)}${experimental(parameter)} ${formatDescription(parameter)}`;
}

function markdown(schema) {
  for (const domain of schema.domains) {
    const result = [];
    const usedTypes = new Map();
    result.push(`\n### domain: ${domain.name}${experimental(domain)}`);
    if (domain.description)
      result.push(`\n${domain.description}`);

    for (const command of (domain.commands || [])) {
      const title = `${domain.name}.${command.name}${experimental(command)}`;
      result.push(`\n---\n`);
      result.push(`\n#### command: ${title}`);
      if (command.description)
        result.push(`\n${command.description}`);
      if (command.parameters && command.parameters.length) {
        result.push(`\n*parameters*`);
        for (const parameter of command.parameters)
          result.push(formatParameter(parameter));
      }
      if (command.returns && command.returns.length) {
        result.push(`\n*returns*`);
        for (const parameter of command.returns)
          result.push(formatParameter(parameter));
      }
    }

    for (const event of (domain.events || [])) {
      const title = `${domain.name}.${event.name}${experimental(event)}`;
      result.push(`\n---\n`);
      result.push(`\n#### event: ${title}`);
      if (event.description)
        result.push(`\n${event.description}`);
      if (event.parameters && event.parameters.length) {
        result.push(`\n*parameters*`);
        for (const parameter of event.parameters)
          result.push(formatParameter(parameter));
      }
    }

    for (const type of (domain.types || [])) {
      const title = `${domain.name}.${type.name}`;
      result.push(`\n---\n`);
      result.push(`\n#### type: ${title}`);
      if (type.description)
        result.push(`\n${type.description}`);
      result.push(`\n*base type*`);
      result.push(`- **${type.type}**`);
      if (type.properties && type.properties.length) {
        result.push(`\n*properties*`);
        for (const property of type.properties)
          result.push(formatParameter(property));
      }

      for (const usageType of type.usages.keys()) {
        const usages = type.usages.get(usageType);
        result.push(`\n*${usageType}*`);
        usages.sort((a, b) => {
          if (a.item.name > b.item.name)
            return 1;
          return a.item.name < b.item.name ? -1 : 0;
        });
        for (const usage of usages)
          result.push(`- [${usage.item.domain.name}.${usage.item.name}]`);
      }
    }

    result.push(``);

    // Generate links to commands, events and types for type usages.
    for (const type of (domain.types || [])) {
      for (const usageType of type.usages.keys()) {
        const usages = type.usages.get(usageType);
        for (const {item, prefix} of usages) {
          const domainName = item.domain.name;
          result.push(`[${domainName}.${item.name}]: ${domainName.toLowerCase()}.html#${prefix}-${domainName.toLowerCase()}-${item.name.toLowerCase()} "${domainName}.${item.name}"`);
        }
      }
    }

    // Generate links to used types.
    for (const type of domain.usedTypes) {
      const domainName = type.domain.name.toLowerCase();
      const name = type.name.toLowerCase();
      result.push(`[${type.domain.name}.${type.name}]: ${domainName}.html#type-${domainName}-${name} "${type.domain.name}.${type.name}"`);
    }

    result.push(`[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON boolean"`);
    result.push(`[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON string"`);
    result.push(`[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON number"`);
    result.push(`[integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON integer"`);
    result.push(`[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON object"`);
    result.push(`[any]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON any"`);

    fs.writeFileSync(`docs/md/${domain.name.toLowerCase()}.md`, result.join('\n'));
  }
}

function html(schema) {
  for (const domain of schema.domains) {
    const md = fs.readFileSync(`docs/md/${domain.name.toLowerCase()}.md`, 'utf8');
debugger;
    fs.writeFileSync(`docs/html/${domain.name.toLowerCase()}.html`, marked(md));
  }
}
