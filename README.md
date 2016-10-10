![ReactJS Tampa Bay Logo](https://avatars2.githubusercontent.com/u/18738421?v=3&s=200)

# ReHacked (October 11, 2016): SPA Basics @ Women Who Code Tampa
### By [ReactJS Tampa Bay](http://www.meetup.com/ReactJS-Tampa-Bay/)

# Goals

1. Understand React State and Lifecycle
1. Understand How React Communicates w/ Web API's

# ReHacked

## Goal 1: Understand React State and Lifecycle

### Explanation

* Your React code generally never touches the DOM directly
* React has a "shadow DOM" which touches the actual DOM based on changes in state
* React is really a state machine
  * The UI should render consistently given a specific state.
  * Examples of state changes: The submit button was clicked, the text was changed in the input box, the data from the API is loading
* React components have [lifecycle of events](https://facebook.github.io/react/docs/component-specs.html)
* The management of a component's state in conjunction with its lifecycle events is the first building blocks to understanding React

### Instructions

* Add the following function to `src/App.js`

```javascript
onTextChange(event) {
    let state = Object.assign({}, this.state);
    state[event.target.id] = event.target.value;
    this.setState(state);
  }
```

* Add the following code to `src/App.js` right underneath the class declaration

```javascript
 constructor(props) {
     super(props);
 
     this.state = {
       firstName: '',
       lastName: ''
     };
 
     this.onTextChange = this.onTextChange.bind(this);
   }
```

* In `src/App.js`, modify the `render` function like the following

```javascript
render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={wwcLogo} className="App-logo" alt="logo" />
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
      </div>
    );
  }
```

* Once the app reloads, try typing in the newly established firstName and lastName input boxes and watch the UI change state

## Goal 2: Understand How React Communicates w/ Web API's

### Explanation

* CRA (`create-react-app`) is built on [Babel](https://babeljs.io/)
* Babel allows developers to write modern JavaScript (ES6/7) without worrying about browser compatibility
  * Babel "transpiles" a developer's code back down to the lowest common denominator, ES5
* A convenience factor of Babel is the ability to use `fetch`, the eventual replacement of `XHR`
  * You may know of its jQuery higher level abstraction, `$.ajax`
* Communicating with a Web API is a cinch, and tying it back to the React Event Lifecycle is also relatively straightforward

### Instructions

* Add this function to `src/App.js`

```javascript
onHipsterIpsumChange(payload) {
    this.setState({
      hipsterIpsumText: {__html: payload.text}
    });
  }
```

* Now, add this function which utilizes `fetch` to `src/App.js`

```javascript
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
```

* Modify the `constructor` function we established in Goal 1 to resemble the following 

```javascript
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
```

* Modify the `render` function to resemble the following

```javascript
render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={wwcLogo} className="App-logo" alt="logo" />
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
```

* Once the app reloads, click on the `Get Hipster Ipsum` button and ensure that some Hipster Ipsum comes through

# Summary

In Step 2, we have accomplished the following

* Made our App stateful by using React's built-in state
* Utilized event handlers to change the state of the app
* Utilized `fetch` to communicate with Web API's


[Back to Step 1](https://github.com/reactjstampabay/rehacked-spa-basics-wwc/tree/step-1) || [Continue to Step 3](https://github.com/reactjstampabay/rehacked-spa-basics-wwc/tree/step-3)
