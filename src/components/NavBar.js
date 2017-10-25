import React from 'react';
import {Link} from "react-router-dom";


class NavBar extends React.Component {

  render() {
    return (
      <div>
        <Link title="Main" to="/">Main</Link>
        <Link title="Other" to="/other">Other</Link>
      </div>
    );
  }

}

export default NavBar;
