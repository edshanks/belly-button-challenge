# belly-button-challenge

To open the interactive webpage, select and open 'index.html' located in the main repository. Once the webpage is opened, the user can click on the dropdown menu and choose the ID number corresponding to the desired sample dataset. The webpage displays the demographic data of the test subject and a horizontal bar chart of the top 10 OTUs found in the sample and the corresponding sample values. Additionally, a bubble chart, which displays all of the OTUs in the data set, with the size of each bubble respresenting the sample value of each OTU, is displayed below the bar chart. 

Some samples have less than 10 OTUs and will therefore have less than 10 OTUs displayed in the bar chart. Some of the bubble charts may appear empty upon inspection. If one scrolls over the bubble chart, hover messages will appear, showing that the charts are in fact not empty. These issues appear in the sample datasets where there are only extremely small sample values (e.g. 2). 

The raw dataset can be found in 'samples.json'. The javascript script can be found in the 'JS' folder, which is located in the 'static' folder found in the main repository.


