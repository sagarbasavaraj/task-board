import React from 'react';
import { ConnectedRouter } from 'react-router-redux';

import { Route } from 'react-router-dom';

import { history } from '../store/store';

import MainLayout from '../layouts/main-layout';

const AppRoutes = () => (
  <ConnectedRouter history={history}>
    <Route path="/" component={MainLayout} />
  </ConnectedRouter>
);

export default AppRoutes;
