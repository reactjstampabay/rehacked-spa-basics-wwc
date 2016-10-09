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
