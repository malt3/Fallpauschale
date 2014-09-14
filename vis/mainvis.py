
import csv
import string
import numpy as np
from bokeh.plotting import *

alphabet = list(string.ascii_uppercase)
kategorie = []
relation = []
anzahl = []
x0 = []
relative_relation = []
umrechnung = 3156.82 #Bundesbasisfallwert 2014
for i in range(26):
	relation.append(0.0)
	relative_relation.append(0)
	anzahl.append(0)
	x0.append(0)

with open('../raw/Fallpauschalenkatalog 2014_20140120.csv', 'rb') as input_file:
	reader = csv.reader(input_file,delimiter=';')
	for row in reader:
		if row[0].find("MDC") >= 0:
			kategorie.append(row[0].replace('/',''))
		if row[0][:1] in alphabet and len(row[0])==4:
			position = alphabet.index(row[0][:1])  
			anzahl[position] += 1  
			relation[position]+= float(row[3].replace(',','.'))
	for pos in range(26):
		relative_relation[pos] = relation[pos] / anzahl[pos] * umrechnung
			
print kategorie
### Rendering 		
factors = kategorie
x =  relative_relation

output_file("categorical.html", title="categorical.py example")

hold()

segment(x0, factors, x, factors, y_range=factors, x_range=[0,50000],
        line_width=2, line_color="red", tools="resize,previewsave", title="Fallpauschalen")
circle(x, factors, size=15, fill_color="white", line_color="red", line_width=3, Name="categorical example")

figure()
show()