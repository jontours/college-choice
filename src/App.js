import React, { Component } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import '../node_modules/uswds/dist/css/uswds.css';
import CalculateChoice from './CalculateChoice';
import TableauReport from 'tableau-react';

class App extends Component {
  state = {
    schools: []
  }
  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <TableauReport
            url='https://public.tableau.com/views/Tuitioninstateandout/Dashboard1?:embed=y&:display_count=yes'
          />
        )}/>
        <Route exact path='/calculate' render={({ history }) => (
            <CalculateChoice/>
        )}/>
      </div>
    )
  }
}

export default App;
