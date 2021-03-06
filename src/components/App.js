import React, { Component } from 'react';
import wwcLogo from '../common/assets/wwcLogo.jpg';
import '../common/assets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={wwcLogo} className="App-logo" alt="logo" />
          <h2>
            Welcome to React
          </h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
