import { signup } from '../services/login-service';
import { push } from 'react-router-redux';

const ns = 'login';

const SIGNUP_FAILED = `${ns}.signUpFailed`;

const signUpFailed = error => ({ type: SIGNUP_FAILED, error });

export const signUpUser = ({ name, password, email }) => async dispatch => {
  try {
    await signup({ name, password, email });
    dispatch(push('/login'));
  } catch (error) {
    dispatch(signUpFailed());
  }
};
