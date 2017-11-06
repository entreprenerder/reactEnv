import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Example from './Example.js';

class App extends Component {

  render() {
    return (
      <div>
        <Route exact path='/' render={() => <Example>Hello World</Example>} />
      </div>
    );
  }
}

export default App;
