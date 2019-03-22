#!/usr/bin/python
import json
import random
import re
import math

def parseLength(length):
    m = re.match(r'([0-9]+)(\-([0-9]+))? (inches|feet)', length)
    if m.group(3):
        height = math.floor((int(m.group(1)) + int(m.group(3))) / 2)
        if m.group(4) == 'feet':
            height = height * 12
        return height
    else:
        height = int(m.group(1))
        if m.group(4) == 'feet':
            height = height * 12
        return height

new_data = []
with open('data.json') as json_file:
    data = json.load(json_file)
    for plant in data:
        new_plant = {}
        new_plant['properties'] = {}
        if 'Height' in plant:
            new_plant['properties']['height'] = parseLength(plant['Height'])
        if 'Spread' in plant:
            new_plant['properties']['spread'] = parseLength(plant['Spread'])
        #Generate random color
        r = lambda: random.randint(0,255)
        rand_color = '#%02X%02X%02X' % (r(),r(),r())
        new_plant['tileColor'] = rand_color
        new_plant['name'] = plant['name']
        new_plant['id'] = plant['id']
        if 'Sun' in plant:
            new_plant['properties']['sun'] = plant['Sun']
        if 'Life Cycle' in plant:
            new_plant['properties']['lifeCycle'] = plant['Life Cycle']
        if 'Sow Method' in plant:
            new_plant['properties']['sowMethod'] = plant['Sow Method']
        if 'Ornamental Use' in plant:
            new_plant['properties']['use'] = plant['Ornamental Use'].split(", ")
        new_data.append(new_plant)
with open('data_new.json', 'w') as outfile:  
    json.dump(new_data, outfile, indent=2)
