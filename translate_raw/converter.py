import csv

with open('../raw/Fallpauschalenkatalog 2014_20140120.csv', 'rb') as input_file:
	reader = csv.reader(input_file,delimiter=';')
	result = []
	with open('../raw/Fallpauschalen.json', 'w') as output_file:
		output_file.write("[")
		for row in reader:
			identifier = row[0]
			name = row[2].replace("\r", "")
			relation = row[3]
			dauer = row[5]
			if len(identifier) == 4:
				output_file.write('{"name":"%s","relation":"%s"},'%(name,relation.replace(',','.')))
		output_file.write("]")