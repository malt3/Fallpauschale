import numpy as np
from bokeh.plotting import *
import csv

name = "Knie"
relation = []
bezeichnung = []
rate = 3156.

N = 4000

with open('../raw/Fallpauschalenkatalog 2014_20140120.csv', 'rb') as input_file:
	reader = csv.reader(input_file,delimiter=';')	
	for row in reader:
		if name in row[2]:
			bezeichnung.append(row[2])
			relation.append(float(row[3].replace(',','.'))*rate)


label = []
count = 0
for i in bezeichnung:
	label.append(str(count))
	count +=1
x0 = []
factors = label
x =  relation
for i in range(len(bezeichnung)):
	x0.append(0)

output_file("knie.html", title="categorical.py example")

hold()

segment(x0, factors, x, factors, y_range=factors, x_range=[0,20000],
        line_width=2, line_color="red", tools="resize,previewsave", title=name)
circle(x, factors, size=15, fill_color="white", line_color="red", line_width=3, Name="categorical example")

figure()
show()