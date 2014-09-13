import csv
with open('../raw/Fallpauschalenkatalog 2014_20140120.csv', 'rb') as f:
	reader = csv.reader(f,delimiter=';')
	result = []
	for row in reader:
		identifier = row[0]
		name = row[2]
		relation = row[3]
		result.append([identifier,name,relation])

print result