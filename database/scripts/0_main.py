##################################################################################
############################## Creation of CSV file ##############################
##################################################################################

import requests
import csv
from utils import printProgressBar

pokemonsLength = 151
showProgressBar = True
f = open('pokemons.csv', 'w')
c = csv.writer(f, lineterminator='\n')

if showProgressBar:
    printProgressBar(0, pokemonsLength, prefix='Progress:', suffix='Complete', length=50)
c.writerow(['id', 'name', 'img', 'height', 'weight', 'abilities', 'types'])

for i in range(1, pokemonsLength+1):
    pokemon_info = requests.get('https://pokeapi.co/api/v2/pokemon/%s/' % i).json()
    _id = pokemon_info['id']
    _name = pokemon_info['name']
    _img = pokemon_info['sprites']['other']['official-artwork']['front_default']
    _height = pokemon_info['height']
    _weight = pokemon_info['weight']

    pokemon_abilities = pokemon_info['abilities']
    _arr_abilities = []
    for a in pokemon_abilities:
        _arr_abilities.append(a['ability']['name'])

    pokemon_types = pokemon_info['types']
    _arr_types = []
    for t in pokemon_types:
        _arr_types.append(t['type']['name'])

    c.writerow([_id, _name, _img, _height, _weight, ';'.join(_arr_abilities), ';'.join(_arr_types)])
    if showProgressBar:
        printProgressBar(i, pokemonsLength, prefix='Progress:', suffix='Complete', length=50)
f.close()

##################################################################################



##################################################################################
######################### SQL Server database connection #########################
##################################################################################
'''
import pyodbc
import os
from dotenv import load_dotenv

try:
    load_dotenv()
    connection = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL server};' \
                                'SERVER=' + os.getenv('DB_SERVER') + ';' \
                                'DATABASE=' + os.getenv('DB_NAME') + ';' \
                                'UID=' + os.getenv('DB_USER') + ';' \
                                'PWD=' + os.getenv('DB_PASSWORD') + ';' \
                               )
    print("DB_CONNECTION::successful connection")
except:
    print("DB_CONNECTION::error with connection")
'''
##################################################################################
