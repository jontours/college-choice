import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import theme from './assets/react-toolbox/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

ReactDOM.render(
  
  <BrowserRouter><ThemeProvider theme={theme}><App /></ThemeProvider></BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
