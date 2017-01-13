import React from 'react';
import radium from 'radium';
import styles from './styles.js';

@radium
class App extends React.Component {

  render() {
    return (
      <div style={styles.app}>Hello React</div>
    );
  }

};

export default App;
