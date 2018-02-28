import { loginActionTypes } from './actions/types';

const { AUTH_ERROR, ON_SIGN_IN, ON_SIGN_OUT } = loginActionTypes;

const INITIAL_STATE = {
  user: {},
  authError: null
};

const loginReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ON_SIGN_IN: {
      return state.setIn(['user', 'uid'], payload.uid);
    }
    case ON_SIGN_OUT: {
      return state.setIn(['user'], {});
    }
    case AUTH_ERROR: {
      return state.setIn(['authError'], payload.error);
    }
    default:
      return state;
  }
};

export default loginReducer;
