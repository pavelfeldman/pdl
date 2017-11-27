const fs = require('fs')

fs.readFile('js_protocol.pdl', 'utf8', (err, data) => parse(data));

let protocol = { domains: [], version: {} };
let domain;
let item;
let subitems;
let description;

const primitiveTypes = new Set(['integer', 'number', 'boolean', 'string', 'ojject', 'any']);

function assignType(item, type) {
  if (type === 'enum')
    type = 'string';
  if (primitiveTypes.has(type))
    item.type = type;
  else
    item['$ref'] = type;
}

function createItem(experimental, name) {
  const result = {};
  if (experimental)
    result.experimental = true;
  if (name)
    result.name = name;
  if (description) {
    result.description = description.trim();
    description = '';
  }
  return result;
}

function parse(data) {
  const lines = data.split('\n');
  for (let i = 0; i < lines.length; ++i) {
    const line = lines[i];
    const trimLine = line.trim();
    if (!trimLine) {
      description = '';
      continue;
    }

    if (trimLine.startsWith('#')) {
      description += trimLine.substring(1);
      continue;
    }

    let match = line.match(/^(experimental )?domain (.*)/);
    if (match) {
      domain = createItem(match[1]);
      domain.domain = match[2];
      protocol.domains.push(domain);
      continue;
    }

    match = line.match(/^  (experimental )?type (.*) extends (.*)/);  
    if (match) {
      if (!domain.types)
        domain.types = [];
      item = createItem(match[1], match[2]);
      assignType(item, match[3]);
      domain.types.push(item);
      continue;
    }

    match = line.match(/^  (experimental )?(command|event) (.*)/);
    if (match) {
      let list;
      if (match[2] === 'command') {
        list = domain.commands;
        if (!list)
        list = domain.commands = [];
      } else {
        list = domain.events;
        if (!list)
        list = domain.events = [];
      }
      item = createItem(match[1], match[3]);
      list.push(item);
      continue;
    }

    match = line.match(/^      (experimental )?(optional )?(array of )?([^\s]+) ([^\s]+)/);
    if (match) {
      let param = createItem(match[1], match[5]);
      if (match[2])
        param.optional = true;
      if (match[3]) {
        param.type = 'array';
        param.items = {};
        assignType(param.items, match[4]);
      } else {
        assignType(param, match[4]);
      }
      if (match[4] === 'enum')
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

    match = line.match(/^  version/);
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

    match = line.match(/^      (  )?[^\s]+$/);
    if (match) {
      // enum literal
      enumliterals.push(trimLine);
      continue;
    }

    console.log(`Error in line: ${i+1}, ${line}`);
  }
  console.log(JSON.stringify(protocol, '', 2));
}
