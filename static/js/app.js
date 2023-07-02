const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

let myData = [];

function init() {
  d3.json(url)
  .then((data) => {
    console.log("Samples: ",data.samples);
    myData = data
    ////////////////////////////////////////////////
    //// initialize and populate drop down list ////
    let dropdownMenu = d3.select("#selDataset");

    // populated dropdown list
    for (i=0; i<data.names.length; i++) {
      dropdownMenu.append('option').text(data.names[i]).attr('value', data.names[i]);
      //console.log("added option data names: ", data.names[i])
    };

    //// declare data for initial plot (0th element of data.samples)
    let init_sample = data.samples[0];
    
    
    //// initialize bar chart
    barPlot(init_sample);
    //// initialize bubble chart
    bubblePlot(init_sample);

    //// declare data for initial demographics (0th element)
    let init_metaData = data.metadata[0];

    //// initalize metadata
    demoInfo(init_metaData)
    
  });
};

d3.selectAll("#selDataset").on("change", updateData);

function updateData() {
  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  let id_num = dropdownMenu.property("value");

  
  // finds index number in data.samples corresponding to id number selected in drowdown menu
  var index = myData.samples.findIndex(name => name.id == id_num);
  console.log('Index number of selected dataset: ',index)

  // chooses sample dataset based on index number found in previous line
  let selected_sample = myData.samples[index];
  console.log(selected_sample)

  // clear previous demographic data
  d3.select("#sample-metadata").html("");


  // update demographic info
  demoInfo(myData.metadata[index])
  console.log("show selected metadata: ", myData.metadata[index])

  ////////// update bar plot //////////////////////////////////////////////////

  // remove previous plot
  d3.select("#bar").html("");  

  // call barPlot to create plot with selected data
  barPlot(selected_sample)

  ////////// update bubble plot ///////////////////////////////////////////////

  // remove previous plot
  d3.select('#bubble').html("")

  // call barPlot to create plot with selected data
  bubblePlot(selected_sample)
};

function barPlot(data) {
  //data = data.samples

  // empty list for plot tick labels
  let tick_labels = [];

  // build tick_labels depending on length of sample_values array
  if (data.sample_values.length >= 10) {
    // appends 'OTU' to tick labels
    for (let i=0; i <10; i++) {
      tick_labels.push(`OTU ${data.otu_ids[i]}`)
    };
  } else if (data.sample_values.length > 1) {
      for (let i=0; i < data.sample_values.length; i++) {
        tick_labels.push(`OTU ${data.otu_ids[i]}`)
      }
    } else {
    tick_labels.push(`OTU ${data.otu_ids}`)
    };
  


  
  // build trace & put data in descending order
  var trace = [{
    type: 'bar',
    x: data.sample_values.slice(0,10).reverse(),
    y: tick_labels.reverse(),
    text: data.otu_labels.slice(0,10).reverse(),
    orientation: 'h'
  }];
  console.log('otu labels: ',data.otu_ids)
  Plotly.newPlot('bar', trace);
};

function bubblePlot(data) {
  //data = data.samples
 let int_data = data.sample_values.map(x => { 
  return parseInt(x, 10)});

  var trace1 = {
    x: data.otu_ids,
    y: data.sample_values,
    text: data.otu_labels,
    mode: 'markers',
    marker: {
      color: data.otu_ids,
      size: int_data,
      colorscale: 'Jet'
    }
  };

  var plot_data = [trace1];

  var layout = {
    title: '',
    xaxis: {
      title: {
        text:'OTU ID'
      }
    },
    showlegend: false
    //height: 600,
    //width: 1300
  };

  Plotly.newPlot('bubble', plot_data, layout);
  console.log('int_data: ', int_data)
  
};

function demoInfo(data) {
  // grab HTML element to modify
  let meta_list = d3.select("#sample-metadata");

  // loop through given metadata and extract key value pairs
  Object.entries(data).forEach(([key,value]) => {
    
    // append key value pairs to list items below demographics box
    meta_list.append("li").text(`${key}: ${value}`)

  });
};

init();

