// Routes.js
import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './Home';
import Login from './Login';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routes;
