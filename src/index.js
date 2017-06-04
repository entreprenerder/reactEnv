// React
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';

// JS Libraries
import jquery from 'jquery';
import bootstrap from 'bootstrap';

// Stylesheets
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/font-awesome/css/font-awesome.css';
import './../node_modules/animate.css/animate.min.css';

// Components
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
