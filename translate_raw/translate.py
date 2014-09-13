import csv


with open('../raw/Fallpauschalenkatalog 2014_20140120.csv', 'rb') as f:
	reader = csv.reader(f,delimiter=';')
	for row in reader:
		identifier = row[0]
		name = row[2]
		relation = row[3]
		if len(identifier) == 4:
