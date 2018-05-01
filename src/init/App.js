import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { push } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { firebase } from '../firebase/firebase';
import { store } from '../store/store';
import AppRoutes from '../routes/routes';

import { onSignIn, onSignOut } from '../reducers/actions/login-actions';
import {
  subscribeDataListeners,
  unsubcribeDataListeners
} from '../reducers/actions/taskboard-actions';

class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        store.dispatch(onSignIn(user));
        store.dispatch(subscribeDataListeners(user.uid));
        store.dispatch(push('/taskboard'));
      } else {
        // No user is signed in.
        store.dispatch(onSignOut());
        store.dispatch(unsubcribeDataListeners());
        store.dispatch(push('/'));
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <AppRoutes />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
