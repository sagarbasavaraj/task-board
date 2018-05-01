import moment from 'moment';
import database from '../../firebase/firebase';

import { taskboardActionTypes } from './types';

const {
  TOGGLE_ADD_TASK_DIALOG,
  ADD_TASK,
  REMOVE_TASK,
  REST_TASKBOARD
} = taskboardActionTypes;

const addTask = task => ({ type: ADD_TASK, payload: { task } });
const removeTask = taskId => ({ type: REMOVE_TASK, payload: { taskId } });
const resetTaskbaord = () => ({ type: REST_TASKBOARD });

let tasksRef;

export const toggleAddTaskDialog = () => ({
  type: TOGGLE_ADD_TASK_DIALOG
});

export const startAddTask = (task = {}) => async (dispatch, getState) => {
  const { uid } = getState().login.user;
  const { title, priority, status, description } = task;
  const createdOn = moment().format('MMM Do YY');
  try {
    await database.ref(`users/${uid}/tasks`).push({
      title,
      priority,
      status,
      description,
      createdOn
    });
  } catch (e) {
    console.log(e);
  }
};

export const subscribeDataListeners = uid => (dispatch, getState) => {
  tasksRef = database.ref(`users/${uid}/tasks`);

  tasksRef.on('child_added', function(snapshot) {
    const data = snapshot.val();
    const createdOn = moment().format('MMM Do YY');
    dispatch(addTask({ id: snapshot.key, createdOn, ...data }));
  });

  tasksRef.on('child_changed', function(snapshot) {
    const data = snapshot.val();
    dispatch(addTask({ id: snapshot.key, ...data }));
  });

  tasksRef.on('child_removed', function(data) {
    dispatch(removeTask(data.key));
  });
};

export const unsubcribeDataListeners = () => dispatch => {
  if (tasksRef) {
    tasksRef.off();
  }
  dispatch(resetTaskbaord());
};
