import React from 'react';
import { store } from './store/store';
import { Provider } from 'react-redux';
import AppRoutes from './routes/routes';

const App = () => (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

export default App;
