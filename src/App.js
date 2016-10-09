import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      hipsterIpsumText: ''
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.hipsterIpsum = this.hipsterIpsum.bind(this);
    this.onHipsterIpsumChange = this.onHipsterIpsumChange.bind(this);
  }

  onTextChange(event) {
    let state = Object.assign({}, this.state);
    state[event.target.id] = event.target.value;
    this.setState(state);
  }

  onHipsterIpsumChange(payload) {
    this.setState({
      hipsterIpsumText: {__html: payload.text}
    });
  }

  hipsterIpsum() {
    const onHipsterIpsumChange = this.onHipsterIpsumChange;
    let options = {
      method: 'GET'
    };

    fetch('http://hipsterjesus.com/api', options)
      .then(response => response.json())
      .then(payload => {
        onHipsterIpsumChange(payload);
      })
      .catch(error => {
        console.log('OH NOES ' + JSON.stringify(error));
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            Welcome to React
            {(this.state.firstName || this.state.lastName) &&
            ', ' + this.state.firstName + ' ' + this.state.lastName}
          </h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input id="firstName" type="text" value={this.state.firstName} onChange={this.onTextChange} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input id="lastName" type="text" value={this.state.lastName} onChange={this.onTextChange} />
        </div>
        {this.state.hipsterIpsumText &&
        <div>
          <h3>Hipster Ipsum Time</h3>
          <div dangerouslySetInnerHTML={this.state.hipsterIpsumText}></div>
        </div>
        }
        <div>
          <button onClick={this.hipsterIpsum}>Get Hipster Ipsum</button>
        </div>
      </div>
    );
  }
}

export default App;
