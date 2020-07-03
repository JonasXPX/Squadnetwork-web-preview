import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/styles.css';
import App from './App';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history'
import { ReactNode } from 'react';

ReactDOM.render(
  <React.StrictMode>
    <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

export interface IProps {
  children?: ReactNode
}