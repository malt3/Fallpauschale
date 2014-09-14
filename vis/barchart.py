import numpy as np
from bokeh.plotting import *

with open("../") as results_file:
	results = results_file.read()
	
relation = []
bezeichnung = []
for i in len(results):
	relation.append(None)
	bezeichnung.append(None)
	
for row in reader:
	if row[0] in results:
		bezeichnung[row] = row[3]
		relation[row] = row[5]

x0 = []
factors = bezeichnung
x =  relation
for i in range(23):
	x0.append(0)

output_file("knie.html", title="categorical.py example")

hold()

segment(x0, factors, x, factors, y_range=factors, x_range=[0,50000],
        line_width=5, line_color="blue", tools="resize,previewsave", title="")
circle(x, factors, size=15, fill_color="blue", line_color="blue", line_width=5, Name="categorical example")

figure()
show()