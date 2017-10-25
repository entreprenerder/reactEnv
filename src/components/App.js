import React from 'react';
import {Redirect} from "react-router";
import {Route, Switch} from "react-router-dom";

import radium, {Style} from 'radium';
import styles from '../../src/styles/App.js';
import siteRules from '../../src/styles/rules.js';

import Example from './Example.js';
import OtherPage from './OtherPage.js';
import NavBar from './NavBar.js';


@radium
class App extends React.Component {

  render() {
    return (
      <div style={styles.app}>
        <NavBar />


        <Route exact path="/" render={() => <Example />} />
        <Route path="/other" render={() => <OtherPage />} />


        {siteRules.map((rules, index) => <Style key={`style-rule-${index}`} rules={rules} />)}
      </div>
    );
  }

}

export default App;
