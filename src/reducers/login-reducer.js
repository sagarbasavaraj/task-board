import { loginActionTypes } from './actions/types';

const { AUTH_ERROR, ON_SIGN_IN, ON_SIGN_OUT, CLEAR_ERROR } = loginActionTypes;

const INITIAL_STATE = {
  user: {},
  authError: null
};

const loginReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ON_SIGN_IN: {
      const { user } = payload;
      return state
        .setIn(['user', 'uid'], user.uid)
        .setIn(['user', 'email'], user.email)
        .setIn(['authError'], null);
    }
    case ON_SIGN_OUT: {
      return state.setIn(['user'], {});
    }
    case AUTH_ERROR: {
      return state.setIn(['authError'], payload.error);
    }
    case CLEAR_ERROR: {
      return state.setIn(['authError'], null);
    }
    default:
      return state;
  }
};

export default loginReducer;
