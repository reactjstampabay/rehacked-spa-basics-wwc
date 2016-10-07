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

1. 

## Goal 2: Understand How React Communicates w/ Web API's

### Explanation

* CRA (`create-react-app`) is built on [Babel](https://babeljs.io/)
* Babel allows developers to write modern JavaScript (ES6/7) without worrying about browser compatibility
  * Babel "transpiles" a developer's code back down to the lowest common denominator, ES5
* A convenience factor of Babel is the ability to use `fetch`, the eventual replacement of `XHR`
  * You may know of its jQuery higher level abstraction, `$.ajax`
* Communicating with a Web API is a cinch, and tying it back to the React Event Lifecycle is also relatively straightforward

### Instructions

1. 

# Summary

TODO: Summary for Step 2

* 


[Back to Initial](https://github.com/reactjstampabay/rehacked-spa-basics-wwc/tree/step-1) || [Continue to Step 2](https://github.com/reactjstampabay/rehacked-spa-basics-wwc/tree/step-3)
