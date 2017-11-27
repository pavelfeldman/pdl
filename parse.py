import os
import json
import os
import re

pdl_file = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'js_protocol.pdl')

protocol = { 'domains': [], 'version': {} }
domain = None
item = None
subitems = None
description = ''

primitiveTypes = ['integer', 'number', 'boolean', 'string', 'ojject', 'any']

def main():
  with open(pdl_file) as f: content = f.read()
  parse(content)


def assignType(item, type):
  if type == 'enum':
    type = 'string'
  if type in primitiveTypes:
    item['type'] = type
  else:
    item['$ref'] = type


def createItem(experimental, name=''):
  result = {}
  if experimental:
    result['experimental'] = True
  if name:
    result['name'] = name
  global description
  if description:
    result['description'] = description.strip()
    description = ''
  return result


def parse(data):
  global description
  lines = data.split('\n')
  for line in lines:
    trimLine = line.strip()
    if len(trimLine) == 0:
      description = ''
      continue

    if trimLine.startswith('#'):
      description += trimLine[1:]
      continue

    match = re.compile('^(experimental )?domain (.*)').match(line)
    if match:
      domain = createItem(match.group(1))
      domain['domain'] = match.group(2)
      protocol['domains'].append(domain)
      continue

    match = re.compile('^  (experimental )?type (.*) extends (.*)').match(line)
    if match:
      if not 'types' in domain:
        domain['types'] = []
      item = createItem(match.group(1), match.group(2))
      assignType(item, match.group(3))
      domain['types'].append(item)
      continue

    match = re.compile('^  (experimental )?(command|event) (.*)').match(line)
    if match:
      list = []
      if match.group(2) == 'command':
        if 'commands' in domain:
          list = domain['commands']
        else:
          list = domain['commands'] = []
      else:
        if 'events' in domain:
          list = domain['events']
        else:
          list = domain['events'] = []
    
      item = createItem(match.group(1), match.group(3))
      list.append(item)
      continue

    match = re.compile('^      (experimental )?(optional )?(array of )?([^\s]+) ([^\s]+)').match(line)
    if match:
      param = createItem(match.group(1), match.group(5))
      if match.group(2):
        param['optional'] = True
      if match.group(3):
        param['type'] = 'array'
        param['items'] = {}
        assignType(param['items'], match.group(4))
      else:
        assignType(param, match.group(4))
      if match.group(4) == 'enum':
        enumliterals = param['enum'] = []
      subitems.append(param)
      continue

    match = re.compile('^    (parameters|returns|properties)').match(line)
    if match:
      subitems = item[match.group(1)] = []
      continue

    match = re.compile('^    enum').match(line)
    if match:
      enumliterals = item['enum'] = []
      continue

    match = re.compile('^version').match(line)
    if match:
      continue

    match = re.compile('^  major (\d+)').match(line)
    if match:
      protocol['version']['major'] = match.group(1)
      continue

    match = re.compile('^  minor (\d+)').match(line)
    if match:
      protocol['version']['minor'] = match.group(1)
      continue

    match = re.compile('^      (  )?[^\s]+$').match(line)
    if match:
      # enum literal
      enumliterals.append(trimLine)
      continue

    print('Error in line: %s' % line)

  print(json.dumps(protocol, indent=4, sort_keys=True))


if __name__ == "__main__":
    main()
