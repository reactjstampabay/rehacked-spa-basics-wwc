import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import NameForm from './containers/NameForm';
import HipsterIpsum from './containers/HipsterIpsum';
import NoMatch from './components/NoMatch';
import './common/assets/index.css';
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
