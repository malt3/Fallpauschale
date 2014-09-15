import numpy as np
from bokeh.plotting import *
import csv

name = "Schulter"
relation = []
bezeichnung = []
rate = 3156

with open('../raw/Fallpauschalenkatalog 2014_20140120.csv', 'rb') as input_file:
	reader = csv.reader(input_file,delimiter=';')	
	for row in reader:
		if name in row[2]:
			bezeichnung.append(row[2])
			relation.append(float(row[3].replace(',','.'))*rate)

"""
Calculate the values for the chart
"""
relation.sort()
sum = 0.0
for fall in relation:
	sum+=fall
average = sum / len(relation)

"""	
Specify the chart values
"""
values = [relation[0], average, relation[-1]]
x = values
x0 = [0,0,0]
label = ["min","avg","max"]
factors = label

"""	
Chart stuff
"""
output_file("schulter.html", title="visualisierung")

hold()

segment(x0, factors, x, factors, y_range=factors, x_range=[0,20000],
        line_width=2, line_color="red", tools="resize,previewsave", title=name)
circle(x, factors, size=15, fill_color="white", line_color="red", line_width=3, Name="")

figure()
show()