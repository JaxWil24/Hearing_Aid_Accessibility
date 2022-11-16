var barDiv = document.getElementById('bar-chart');
​
var trace1 = {
  x: ["GenX_Total Pop", "Millennial_Total Pop", "GenZ_Total Pop"],
  y: [62, 66, 64],
  type: "bar",
  name: "Year 2019"
};
​
var trace2 = {
  x: ["GenX_Total Pop", "Millennial_Total Pop", "GenZ_Total Pop"],
  y: [66, 71, 68],
  type: "bar",
  name: "Year 2026"
};
​
var data = [trace1, trace2];
​
var layout = {
  title: "2019 & 2026 Population by Generation (in millions)",
  barmode: 'group',
  bargap: 0.25,
  bargroupgap: 0.50,
  barnorm: 'count'
};
​
Plotly.newPlot("population", data, layout);