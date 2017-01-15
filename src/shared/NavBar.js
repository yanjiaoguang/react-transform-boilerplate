import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';

import {Tabs, Tab} from 'material-ui/Tabs';

class NavBar extends Component {
  render() {
    return (
          <Tabs>
            <Tab label="Home" />
            <Tab label="Home" />
            <Tab label="About" />
          </Tabs>
    );
  }
}

export default NavBar;
