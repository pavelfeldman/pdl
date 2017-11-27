import os.path
import json
import re
import sys

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


def createItem(experimental, deprecated, name=''):
  result = {}
  if experimental:
    result['experimental'] = True
  if deprecated:
    result['deprecated'] = True
  if name:
    result['name'] = name
  global description
  if description:
    result['description'] = description.strip()
    description = ''
  return result


def parse(data):
  global domain
  global item
  global subitems
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

    match = re.compile('^(experimental )?(deprecated )?domain (.*)').match(line)
    if match:
      domain = createItem(match.group(1), match.group(2))
      domain['domain'] = match.group(3)
      protocol['domains'].append(domain)
      continue

    match = re.compile('^  (experimental )?(deprecated )?type (.*) extends (.*)').match(line)
    if match:
      if not 'types' in domain:
        domain['types'] = []
      item = createItem(match.group(1), match.group(2), match.group(3))
      assignType(item, match.group(4))
      domain['types'].append(item)
      continue

    match = re.compile('^  (experimental )?(deprecated )?(command|event) (.*)').match(line)
    if match:
      list = []
      if match.group(3) == 'command':
        if 'commands' in domain:
          list = domain['commands']
        else:
          list = domain['commands'] = []
      else:
        if 'events' in domain:
          list = domain['events']
        else:
          list = domain['events'] = []
    
      item = createItem(match.group(1), match.group(2), match.group(4))
      list.append(item)
      continue

    match = re.compile('^      (experimental )?(deprecated )?(optional )?(array of )?([^\s]+) ([^\s]+)').match(line)
    if match:
      param = createItem(match.group(1), match.group(2), match.group(6))
      if match.group(3):
        param['optional'] = True
      if match.group(4):
        param['type'] = 'array'
        param['items'] = {}
        assignType(param['items'], match.group(5))
      else:
        assignType(param, match.group(5))
      if match.group(5) == 'enum':
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

    match = re.compile('^    redirect ([^\s]+)').match(line)
    if match:
      item['redirect'] = match.group(1)
      continue

    match = re.compile('^      (  )?[^\s]+$').match(line)
    if match:
      # enum literal
      enumliterals.append(trimLine)
      continue

    print('Error in line: %s' % line)


def main(argv):
    if len(argv) < 2:
        sys.stderr.write("Usage: %s <protocol.pdl> <out_protocol.json>\n" % sys.argv[0])
        return 1

    input_file = open(os.path.normpath(argv[0]), "r")
    pdl_string = input_file.read()
    parse(pdl_string)
    output_file = open(argv[-1], "w")
    json.dump(protocol, output_file, indent=4, sort_keys=False, separators=(',', ': '))
    output_file.close()


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
