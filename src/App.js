import React , { Component } from 'react';
import Home from './Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './shared/NavBar';

class App extends Component {
  render() {
    return (
      <div className="app-wrap">
        <MuiThemeProvider>
          <NavBar />
        </MuiThemeProvider>
        <Home />
        <div className="app-footer">My Footer</div>
      </div>
    );
  }
}
export default App;
