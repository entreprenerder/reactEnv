import React from 'react';
import radium, {Style} from 'radium';
import styles from '../../src/styles/App.js';

@radium
class App extends React.Component {

  render() {
    return (
      <div style={styles.app}>
        <div>Hello World</div>
        {siteRules.map((rules, index) => <Style key={`style-rule-${index}`} rules={rules} />)}
      </div>
    );
  }

};

export default App;
