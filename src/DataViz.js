import React, { Component } from 'react';
import './App.css';
import {Button, Jumbotron, PageHeader, Tabs, Tab, Well} from 'react-bootstrap';

import TableauReport from 'tableau-react';
import theme from './assets/react-toolbox/theme.css'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';



const options = {
    height: 1500,
    width: 1200,
    hideTabs: true
  };
const messages = [
	"Text 1",
	"Text 2"
]

class DataViz extends Component {
  getInitialState() {
    return {
      activeKey: 1,
      paraValue: "Text 1"
    };
  }
  state = {
    activeKey: 1,
    paraValue: "Text blah"
  }
   
  getState(){
    return this.state;
  }

  getParagraph(key){
  	console.log("the key" + key);
  	return messages[key - 1];
  }
  
  handleSelect(key) {
    this.setState({activeKey: key, paraValue:messages[key - 1]}, function () {
    	console.log(this.state.paraValue);
	});
  }

  render () {
  	const { key, paraValue } = this.state

    return (
    	<div>
    	<Jumbotron bsClass='App-hero'>
          <h1>Welcome to the College Data Explorer</h1>
          <p>We've provided some data visualizations for you to analyze different factors that should be considered when making the important life decision of attending college.  Feel free to click around and adjust the graphs in the various tabs, the tabs will store the graphs' state.</p>
	      <section>
	        <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example" animation={false}>
	            <Tab eventKey={1} title="Tuition: 2 Vs. 4 Year Colleges">
	           	  <p>A side by side comparison of tuition between 2 year colleges and 4 year colleges.  Adjust the sliders at the bottom for tuition to filter schools out by cost.</p>
	              <TableauReport
	                url='https://public.tableau.com/views/Tuitioninstateandout/Dashboard1?:embed=y&:display_count=yes'
	                options={options}
	              />
	            </Tab>
	            <Tab eventKey={2} title="Completion Rates">
	              <p>A geographical representation of completion rates, adjust according to tuition and other values.</p>
	              <TableauReport
	                url='https://public.tableau.com/views/RetentionRates_6/Dashboard1?:embed=y&:display_count=yes'
	                options={options}
	              />
	            </Tab>
	            <Tab eventKey={3} title="Retention Rates & Median Debt">
	              <p>Geographical representation of retention rates based on median debt.</p>
	              <TableauReport
	                url='https://public.tableau.com/views/MedianDebtCompletionTuitionMap/Dashboard1?:embed=y&:display_count=yes'
	                options={options}
	              />
	            </Tab>
	            <Tab eventKey={4} title="Default Rates">
	              <p>List of default rates by student after completion.</p>
	              <TableauReport
	                url='https://public.tableau.com/views/defaultrate/Dashboard1?:embed=y&:display_count=yes'
	                options={options}
	              />
	            </Tab>
	            <Tab eventKey={5} title="Income">
	              <p>List of income for students after completion, note: a wise choice for school would be one that maximizes this values while minimizing tuition, default rates, etc.</p>
	              <TableauReport
	                url='https://public.tableau.com/views/CAIncome/Dashboard1?:embed=y&:display_count=yes'
	                options={options}
	              />
	            </Tab>
	              <Tab eventKey={6} title="Average Net Price for Family Income">
	              <p>Price of school versus the income of family.</p>
	              <TableauReport
	                url='https://public.tableau.com/views/AverageNetPrice/Sheet1?:embed=y&:display_count=yes'
	                options={options}
	              />
	            </Tab>
          </Tabs>
	      </section>
	    </Jumbotron>
	    </div>
    );
  }
}

export default DataViz;