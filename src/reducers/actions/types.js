//Actions name spaces
const loginNs = 'src.reducers.login';
const taskboardNs = 'src.reducers.taskboard';

export const loginActionTypes = {
  AUTH_ERROR: `${loginNs}.authError`,
  ON_SIGN_IN: `${loginNs}.signIn`,
  ON_SIGN_OUT: `${loginNs}.signOut`,
  CLEAR_ERROR: `${loginNs}.clearError`
};

export const taskboardActionTypes = {
  TOGGLE_CREATE_TASK_DIALOG: `${taskboardNs}.toggleCreateTaskDialog`
};
