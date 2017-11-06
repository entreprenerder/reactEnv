import * as React from 'react';
import {Route} from 'react-router-dom';
import Example from './Example';

class App extends React.Component {

  render() {
    return (
      <div>
        <Route exact path='/' render={() => <Example>Hello World</Example>} />
        <Route exact path='/example' render={() => <Example>New Page</Example>} />
      </div>
    );
  }
}

export default App;
