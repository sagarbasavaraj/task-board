import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { push } from 'react-router-redux';

import { firebase } from '../firebase/firebase';
import { store } from '../store/store';
import AppRoutes from '../routes/routes';

import { onSignIn, onSignOut } from '../reducers/actions/login-actions';

class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        store.dispatch(onSignIn(user.uid));
        store.dispatch(push('/taskboard'));
      } else {
        // No user is signed in.
        store.dispatch(onSignOut());
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    );
  }
}

export default App;
