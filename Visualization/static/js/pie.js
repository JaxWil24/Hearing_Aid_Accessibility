// // Part 5 - Working Pie Chart
var trace1 = {
    labels: ["GenZ", "GenX", "Millennia..."],
    values: [68299476, 66107653, 70564875],
    type: 'pie'
  };

  var data = [trace1];

  var layout = {
    title: "2026 Population by Generation",
   
  };
 
  Plotly.newPlot("pie", data, layout);