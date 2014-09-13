import csv
import json

with open('../raw/Fallpauschalenkatalog 2014_20140120.csv', 'rb') as input_file:
	reader = csv.reader(input_file,delimiter=';')
	result = []
	with open('../raw/Fallpauschalen.json', 'w') as output_file:
		output_file.write("[")
		for row in reader:
			identifier = row[0]
			name = row[2]
			relation = row[3]
			if len(identifier) == 4:
				output_file.write('"drg":"%s"{"name":"%s","relation":"%s"},'%(identifier,name,relation.replace(',','.')))
		output_file.write("]")