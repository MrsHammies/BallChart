# BallChart

A simple jquery-based library to graph the change of size of a ball for different purposes. Heavily WIP

## How to install
Add ballchart.css to your header and ballchart.js to your body. Be sure to install jquery!
Example html provided in the repository.

## How to use
Create a new object with the values of your graph. Then pass it as an argument when you declare a new graph

		var  data  ={
		sections: 5,  //number of circumferences,
		sectionsStyles: {}, //css code for the circumferences.
							//use padding for the spacing between them
		labels: {
			enabled: true,  //whether you want labels to show
			labels: [] //if empty, the library will automatically fill it
		},
		labelsStyles: {}, //css for the labels 
		ball: { //insert here the css code of the center ball
			height: '300px', 
			width: '300px'
		},
		shadow: {}, //insert the css for the shadow
		rulers: {}, //css for the vertical and horizontal rulers
		max: 25, //max value in the graph
		min: 0, //min value in the grap
		value: 10 //value to graph. Scaled based on max and mix.
		};
		var  graph  =  new  ballChart("#myDiv", data); //#myDiv is the container of the graph

The result:
![enter image description here](https://i.imgur.com/oUxDAr3.png)

You can update the passed object at any time

	var data = {
		value: 10
	}
	graph.update(data); //this will update the graph with the new value

