import React, { Component } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import CalculateChoice from './CalculateChoice';
import TableauReport from 'tableau-react';
import theme from './assets/react-toolbox/theme.css'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import {Button, Jumbotron, PageHeader, Tabs, Tab,} from 'react-bootstrap';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Link from 'react-toolbox/lib/link/Link';
import WrappedPlotlyComponent from './PlotlyPrivateInst';

const options = {
    height: 1500,
    width: 1200,
    hideTabs: true
  };

const avg_tuition_plot_data = require('./data/priv.json');
const community_rate = require('./data/community.json');

const GithubIcon = () => (
  <svg href="https://github.gatech.edu/jcarmack3/college-choice" viewBox="0 0 284 277">
    <g><path d="M141.888675,0.0234927555 C63.5359948,0.0234927555 0,63.5477395 0,141.912168 C0,204.6023 40.6554239,257.788232 97.0321356,276.549924 C104.12328,277.86336 106.726656,273.471926 106.726656,269.724287 C106.726656,266.340838 106.595077,255.16371 106.533987,243.307542 C67.0604204,251.890693 58.7310279,226.56652 58.7310279,226.56652 C52.2766299,210.166193 42.9768456,205.805304 42.9768456,205.805304 C30.1032937,196.998939 43.9472374,197.17986 43.9472374,197.17986 C58.1953153,198.180797 65.6976425,211.801527 65.6976425,211.801527 C78.35268,233.493192 98.8906827,227.222064 106.987463,223.596605 C108.260955,214.426049 111.938106,208.166669 115.995895,204.623447 C84.4804813,201.035582 51.3508808,188.869264 51.3508808,134.501475 C51.3508808,119.01045 56.8936274,106.353063 65.9701981,96.4165325 C64.4969882,92.842765 59.6403297,78.411417 67.3447241,58.8673023 C67.3447241,58.8673023 79.2596322,55.0538738 106.374213,73.4114319 C117.692318,70.2676443 129.83044,68.6910512 141.888675,68.63701 C153.94691,68.6910512 166.09443,70.2676443 177.433682,73.4114319 C204.515368,55.0538738 216.413829,58.8673023 216.413829,58.8673023 C224.13702,78.411417 219.278012,92.842765 217.804802,96.4165325 C226.902519,106.353063 232.407672,119.01045 232.407672,134.501475 C232.407672,188.998493 199.214632,200.997988 167.619331,204.510665 C172.708602,208.913848 177.243363,217.54869 177.243363,230.786433 C177.243363,249.771339 177.078889,265.050898 177.078889,269.724287 C177.078889,273.500121 179.632923,277.92445 186.825101,276.531127 C243.171268,257.748288 283.775,204.581154 283.775,141.912168 C283.775,63.5477395 220.248404,0.0234927555 141.888675,0.0234927555" /></g>
  </svg>
  
  );

class App extends Component {
  componentWillMount() {

  }
  getInitialState() {
    return {
      key: 1
    };
  }
  state = {
    activeKey: 1
  }
   
  getState(){
    return this.state.key;
  }
  
  handleSelect(key) {
    this.setState({activeKey: key});
  }

  render() {
    const { key } = this.state
    return (
      <div>
        <AppBar fixed="false" title='College Choice Planner' rightIcon={<GithubIcon />}>
          <Navigation type="horizontal">
            <Link href="/calculate" label="College Predictor"/>
            <Link href="https://github.gatech.edu/jcarmack3/college-choice" label='Github' />
          </Navigation>
        </AppBar>

        <Jumbotron bsClass='App-hero'>
          <h1>Welcome Incoming Freshman!</h1>
          <p>This site is intended to help you make a more educated choice about selecting what college attend. It focuses on the cost, debt, retention, graduation rates and future income for each college. The reason it is focused on this is because of a study published by John M, in his study he states that, “The financial nexus between college choice and persistence requires the consideration of how two sets of "parallel factors" influence persistence: (1) students' perceptions of financial factors, such as the availability of low tuition or high aid, that students view as very important at the time of their initial college choice decisions (finance related college-choice variables); and (2) measures of the dollar amounts of financial variables (e.g., tuition, aid, living costs) that students actually experience at the time of a subsequent persistence decision.“ Financial Nexus Theory provides evidence that supports a relationship between a student’s education on cost and retention. </p>
          <p>With all time high four-year college costs, it is important that you are educated on the savings that attending a community college for two years first, then transferring to a four-year institution can have. Not only does this save costs which you can see the price difference in schools below but another reason student should consider community college as an option is because the 4-year completion rates of transfer students is higher than those of non-transfer students.</p>
          <p>For the 2015-2016 year you can see the average tuition for a student attending community college is $3,435 and for a student attending a 4-year in-state university is $9,410, out-of-state tuition is $23,893 and private universities are $32,405.</p>
          <WrappedPlotlyComponent plot_data={avg_tuition_plot_data}/>
          <p>Additionally, the most recent data that focuses on 2012 – 2013 6-year completion rates for students who transfer from a community college to a 4-year university shows that the completion rate is 71% for community college graduates that earn their associates first, 60% if they do not get an associate and the completion rate for students who only attended a 4-year university is 59%. Showing a very slight improvement in completion rates for those who attend community college first.</p>
          <WrappedPlotlyComponent plot_data={community_rate}/>
        </Jumbotron>

        <Route exact path='/' render={() => (
          <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example" animation={false}>
            <Tab eventKey={1} title="Tuition: 2 Vs. 4 Year Colleges">
              <TableauReport
                url='https://public.tableau.com/views/Tuitioninstateandout/Dashboard1?:embed=y&:display_count=yes'
                options={options}
              />
            </Tab>
            <Tab eventKey={2} title="Completion Rates">
              <TableauReport
                url='https://public.tableau.com/views/RetentionRates_6/Dashboard1?:embed=y&:display_count=yes'
                options={options}
              />
            </Tab>
            <Tab eventKey={3} title=" Retention Rates & Median Debt">
              <TableauReport
                url='https://public.tableau.com/views/MedianDebtCompletionTuitionMap/Dashboard1?:embed=y&:display_count=yes'
                options={options}
              />
            </Tab>
            <Tab eventKey={4} title="Default Rates">
              <TableauReport
                url='https://public.tableau.com/views/defaultrate/Dashboard1?:embed=y&:display_count=yes'
                options={options}
              />
            </Tab>
            <Tab eventKey={5} title="Income">
              <TableauReport
                url='https://public.tableau.com/views/CAIncome/Dashboard1?:embed=y&:display_count=yes'
                options={options}
              />
            </Tab>
              <Tab eventKey={6} title="Average Net Price for Family Income">
              <TableauReport
                url='https://public.tableau.com/views/AverageNetPrice/Sheet1?:embed=y&:display_count=yes'
                options={options}
              />
            </Tab>
          </Tabs>
        )}/>
        <Route exact path='/calculate' render={({ history }) => (
            <CalculateChoice/>
        )}/>
      </div>

    )
  }
}

export default App;
