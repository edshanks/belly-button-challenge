# belly-button-challenge

To open the interactive webpage, select and open 'index.html' located in the main repository. Once the webpage is opened, the user can click on the dropdown menu and choose the ID number corresponding to the desired sample dataset. The webpage displays the demographic data of the test subject and a horizontal bar chart of the top 10 OTUs found in the sample and the corresponding sample values. Additionally, a bubble chart, which displays all of the OTUs in the data set, with the size of each bubble respresenting the sample value of each OTU, is displayed below the bar chart. 

Some samples have less than 10 OTUs and will therefore have less than 10 OTUs displayed in the bar chart. Some of the bubble charts may appear empty upon inspection. If one scrolls over the bubble chart, hover messages will appear, showing that the charts are in fact not empty. These issues appear in the sample datasets where there are only extremely small sample values (e.g. 2). 

The raw dataset can be found in 'samples.json'. The javascript script can be found in the 'JS' folder, which is located in the 'static' folder found in the main repository.

While writing the script for this project, I asked my instructor, Tom, many questions. He helped me and gave suggestions me regarding the overall structure of my script. For example, he encouraged me to declare a global variable to store the raw data and suggested that I use an update function. More specifically, he helped me write this line of code because I was having trouble finding the proper syntax:

    // populated dropdown list
    for (i=0; i<data.names.length; i++) {
      dropdownMenu.append('option').text(data.names[i]).attr('value', data.names[i]);
      //console.log("added option data names: ", data.names[i])
    };


After talking to Tom, I still got stuck a couple of times. I had a lot of difficulty populating the Demographic Data div in the demoInfo function. I referenced a project on github which was very similar to this project. I used the following line of code:

    // loop through selected metadata and extract key value pairs
  Object.entries(data).forEach(([key,value]) => {
    
    // append key value pairs to list items below demographics box
    meta_list.append("li").text(`${key}: ${value}`)

  });

I also referenced the following line of code from the same project in my updateData function when I could not figure out how to clear the HTML for the Demographic Info div:

  d3.select("#sample-metadata").html("");

Here is the link to this github project:

https://github.com/JeremyTallant/belly-button-challenge/blob/main/static/js/app.js
