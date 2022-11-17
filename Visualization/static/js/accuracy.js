var barDiv = document.getElementById('accuracy2');

var trace1 = {
  x: ["Random Forest ", "SMOTEEN", "Logistics Regression"],
  y: [1, 7, 5],
  type: "bar",
  name: "Precission Score"
};

//var data = [trace1];
var trace2 = {
  x: ["Random Forest ", "SMOTEEN", "Logistics Regression"],
  y: [51, 86, 98],
  type: "bar",
  name: "% of Accuracy Score"
};

var data = [trace1, trace2];

var layout = {
  barmode: 'group',
  bargap: 0.25,
  bargroupgap: 0.50
  //barnorm: 'percent'
};

Plotly.newPlot("accuracy", data, layout);