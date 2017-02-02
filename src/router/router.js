import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory, IndexRedirect } from 'react-router';
import { createHashHistory } from 'history';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import App from '../app.js';

import HomePage from '../pages/Home';
import GettingStartedPage from '../pages/GettingStarted';
import ComponentsPage from '../pages/Components';
import ExpoPage from '../pages/Expo';
import AboutPage from '../pages/About';
import CustomizePage from '../pages/Customize';
import ErrorPage from '../pages/Error';
import {
  AlertPage,
  ButtonPage,
  BadgePage,
  BlockquotePage,
  JumbotronPage,
  PanelPage,
  LoaderPage,
  LabelPage,
  ProgressBarPage,
  ThumbnailPage,
  FullScreenPage
} from '../pages/Sidebars';

const Routes = (
  <Router history={appHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {HomePage} />
      <Route path = "home" component = {HomePage} />
      <Route path = "started" component = {GettingStartedPage} />
      <Route path = "expo" component = {ExpoPage} />
      <Route path = "about" component = {AboutPage} />
      <Route path = "customize" component = {CustomizePage} />
      <Route path = "components" component = {ComponentsPage}>
        <IndexRedirect to = "/components/jumbotron" />
        <Route path = "jumbotron" component = {JumbotronPage} />
        <Route path = "alert" component = {AlertPage} />
        <Route path = "button" component = {ButtonPage} />
        <Route path = "badge" component = {BadgePage} />
        <Route path = "blockquote" component = {BlockquotePage} />
        <Route path = "panel" component = {PanelPage} />
        <Route path = "loader" component = {LoaderPage} />
        <Route path = "label" component = {LabelPage} />
        <Route path = "progressbar" component = {ProgressBarPage} />
        <Route path = "thumbnail" component = {ThumbnailPage} />
        <Route path = "fullscreen" component = {FullScreenPage} />
      </Route>
    </Route>
    <Route path="*" component={ErrorPage}/>
  </Router>
);

export default Routes;
