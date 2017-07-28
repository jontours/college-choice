import React, { Component } from 'react';
import createPlotlyComponent from 'react-plotlyjs';
//See the list of possible plotly bundles at https://github.com/plotly/plotly.js/blob/master/dist/README.md#partial-bundles or roll your own 
import Plotly from 'plotly.js/dist/plotly-cartesian'

const PlotlyComponent = createPlotlyComponent(Plotly);
const plot_data = require('./data/priv.json'); // forward slashes will depend on the file location

class WrappedPlotlyComponent extends Component{
	render() {
    	return (
      		<PlotlyComponent className="whatever" data={plot_data.data} layout={plot_data.layout} config={plot_data.config}/>
    	);
    }
} 

export default WrappedPlotlyComponent;