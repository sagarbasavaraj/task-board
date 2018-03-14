import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from '../../services/login-service';

import { loginActionTypes } from './types';

const { AUTH_ERROR, ON_SIGN_IN, ON_SIGN_OUT } = loginActionTypes;

const authError = error => ({ type: AUTH_ERROR, payload: { error } });

export const onSignIn = user => ({ type: ON_SIGN_IN, payload: { user } });

export const onSignOut = () => ({ type: ON_SIGN_OUT });

export const signUpUser = ({ email, password }) => async dispatch => {
  try {
    await createUserWithEmailAndPassword(email, password);
  } catch (error) {
    const { code, message } = error;
    dispatch(authError({ code, message }));
  }
};

export const signInUser = ({ email, password }) => async dispatch => {
  try {
    await signInWithEmailAndPassword(email, password);
  } catch (error) {
    const { code, message } = error;
    dispatch(authError({ code, message }));
  }
};

export const signOutUser = () => async dispatch => {
  try {
    await signOut();
  } catch (error) {
    const { code, message } = error;
    dispatch(authError({ code, message }));
  }
};
