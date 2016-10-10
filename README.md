![ReactJS Tampa Bay Logo](https://avatars2.githubusercontent.com/u/18738421?v=3&s=200)

# ReHacked (October 11, 2016): SPA Basics @ Women Who Code Tampa
### By [ReactJS Tampa Bay](http://www.meetup.com/ReactJS-Tampa-Bay/)

# Goals

1. Understanding Client Side Routing
1. Break Up Our App Into Routes

# ReHacked

## Goal 1: Understanding Client Side Routing

### Explanation

* The React ecosystem has a routing solution called `react-router`
* `react-router` wraps React components as routes for your application

### Instructions

1. In a shell, execute `npm install react-router --save`
1. In the `index.js` file, add this statement to the top: `import { Router, Route, IndexRoute, browserHistory } from 'react-router';`
1. In the index.js file, replace the `ReactDOM.render` code with the code below

```javascript
let router =
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>;

ReactDOM.render(
  router,
  document.getElementById('root')
);
```


## Goal 2: Break Up Our App Into Routes

### Explanation

* We have an amalgamation of functionality in the App.js component. We should refactor these into their own routes
  * We have a dynamic name form and "Hipster Ipsum"
* We want to break these functional pieces up into their own routes with the same parent template 

### Instructions

- Let's create three new components: `NameForm.js`, `HipsterIpsum.js`, and `NoMatch.js`
- `NameForm.js` should be implemented as below

```javascript
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
```

- `HipsterIpsum.js` should be implemented as below

```javascript
import React from 'react';

export default class HipsterIpsum extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hipsterIpsumText: ''
    };

    this.hipsterIpsum = this.hipsterIpsum.bind(this);
    this.onHipsterIpsumChange = this.onHipsterIpsumChange.bind(this);
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
      <div>
        <div>
          <button onClick={this.hipsterIpsum}>Get Hipster Ipsum</button>
        </div>
        <div>
          {this.state.hipsterIpsumText &&
          <div>
            <h3>Hipster Ipsum Time</h3>
            <div dangerouslySetInnerHTML={this.state.hipsterIpsumText}></div>
          </div>
          }
        </div>
      </div>
    );
  }
}
```

- `NoMatch.js` should be implemented as below

```javascript
import React from 'react';

export default class NoMatch extends React.Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          We have no idea where you're trying to go.
        </p>
      </div>
    );
  }
}
```

- Refactor `App.js` to be implemented as below

```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
```

- Refactor `index.js` to be implemented as below

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NameForm from './NameForm';
import HipsterIpsum from './HipsterIpsum';
import NoMatch from './NoMatch';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

let router =
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={NameForm} />
      <Route path="hipster_ipsum" component={HipsterIpsum} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>;

ReactDOM.render(
  router,
  document.getElementById('root')
);
```

- Once the application auto-refreshes, ensure that you can now browse to `http://localhost:3000` which will show `NameForm.js`
- Also check that you can browse to `http://localhost:3000/hipster_ipsum` which will show `HipsterIpsum.js`
- Finally, try navigating to any route that's not `/hipster_ipsum`, and you should now see the contents of `NoMatch.js`

# Summary

In Step 3, we have accomplished the following

* Installed `react-router`
* Refactored our app to be split into routes with a shared layout
* Implemented a "404" route

[Back to Step 2](https://github.com/reactjstampabay/rehacked-spa-basics-wwc/tree/step-2) || [Continue to Step 4](https://github.com/reactjstampabay/rehacked-spa-basics-wwc/tree/step-4)
