import React from 'react';

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: ''
    };

    this.onTextChange = this.onTextChange.bind(this);
  }

  onTextChange(event) {
    let state = Object.assign({}, this.state);
    state[event.target.id] = event.target.value;
    this.setState(state);
  }

  render() {
    return (
      <div>
        <p className="App-intro">
          Welcome to React
          {(this.state.firstName || this.state.lastName) &&
          ', ' + this.state.firstName + ' ' + this.state.lastName}
        </p>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input id="firstName" type="text" value={this.state.firstName} onChange={this.onTextChange} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input id="lastName" type="text" value={this.state.lastName} onChange={this.onTextChange} />
        </div>
      </div>
    );
  }
}