import React from 'react';
import { ConnectedRouter } from 'react-router-redux';

import { Route, Switch } from 'react-router-dom';

import { history } from '../store/store';

import Layout from '../layouts/layout';
import Home from '../home/home';
import Login from '../login/login';

const AppRoutes = () => (
  <ConnectedRouter history={history}>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Layout>
  </ConnectedRouter>
);

export default AppRoutes;
