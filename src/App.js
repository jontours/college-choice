import React, { Component } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import '../node_modules/uswds/dist/css/uswds.css';
import CalculateChoice from './CalculateChoice';
import TableauReport from 'tableau-react';
import {PageHeader, Tabs, Tab} from 'react-bootstrap';

const options = {
    height: 1500,
    width: 1000,
    hideTabs: true
  };

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
        <PageHeader bsClass='App-header'> 
          College Choice Explorer <small>Students Guide Plan College</small>
        </PageHeader>

        <Route exact path='/' render={() => (
          <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example" animation={false}>
            <Tab eventKey={1} title="2 vs 4 Year Tuition">
              <TableauReport
                url='https://public.tableau.com/views/Tuitioninstateandout/Dashboard1?:embed=y&:display_count=yes'
                options={options}
              />
            </Tab>
            <Tab eventKey={2} title="Geo stuff add title later">
              <div>
                Pooop
              </div>
            </Tab>
            <Tab eventKey={3} title="More Geo stuff add title later">
              <div>
                Poooperrrr
              </div>
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
