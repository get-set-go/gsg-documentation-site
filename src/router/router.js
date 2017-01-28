import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory, IndexRedirect } from 'react-router';
import { createHashHistory } from 'history';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import App from '../app.js';

import HomePage from '../pages/Home';
import GettingStartedPage from '../pages/GettingStarted';
import ComponentsPage from '../pages/Components';
import ErrorPage from '../pages/Error';

const Routes = (
  <Router history={appHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {HomePage} />
      <Route path = "home" component = {HomePage} />
      <Route path = "started" component = {GettingStartedPage} />
      <Route path = "components" component = {ComponentsPage} />
    </Route>
    <Route path="*" component={ErrorPage}/>
  </Router>
);

export default Routes;
