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
  TOGGLE_TASK_DIALOG: `${taskboardNs}.toggleTaskDialog`,
  SET_TASK: `${taskboardNs}.setTask`,
  REMOVE_TASK: `${taskboardNs}.removeTask`,
  RESET_TASKBOARD: `${taskboardNs}.resetTaskboard`,
  SET_SELECTED_TASK: `${taskboardNs}.setSelectedTask`
};
