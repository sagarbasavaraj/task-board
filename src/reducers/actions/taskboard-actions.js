import moment from 'moment';
import database from '../../firebase/firebase';

import { taskboardActionTypes } from './types';

//TODO general add logging
//Handle Errors

const {
  TOGGLE_TASK_DIALOG,
  SET_TASK,
  REMOVE_TASK,
  RESET_TASKBOARD,
  SET_SELECTED_TASK,
  UPDATE_TASK
} = taskboardActionTypes;

const setTask = task => ({ type: SET_TASK, payload: { task } });
const removeTask = taskId => ({ type: REMOVE_TASK, payload: { taskId } });
const resetTaskbaord = () => ({ type: RESET_TASKBOARD });
const updateTask = task => ({ type: UPDATE_TASK, payload: { task } });

export const setSelectedTaskId = taskId => ({
  type: SET_SELECTED_TASK,
  payload: { taskId }
});

let tasksRef;

export const toggleTaskDialog = actionType => ({
  type: TOGGLE_TASK_DIALOG,
  payload: { actionType }
});

export const startSetTask = (task = {}) => async (dispatch, getState) => {
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

export const startUpdateTask = (selectedTaskId, task = {}) => async (
  dispatch,
  getState
) => {
  const { uid } = getState().login.user;
  const updatedOn = moment().format('MMM Do YY');
  try {
    await database
      .ref(`users/${uid}/tasks/${selectedTaskId}`)
      .update({ ...task, updatedOn });
  } catch (e) {
    console.log(e);
  }
};

export const subscribeDataListeners = uid => (dispatch, getState) => {
  tasksRef = database.ref(`users/${uid}/tasks`);

  tasksRef.on('child_added', function(snapshot) {
    const data = snapshot.val();
    const createdOn = moment().format('MMM Do YY');
    dispatch(setTask({ id: snapshot.key, createdOn, ...data }));
  });

  tasksRef.on('child_changed', function(snapshot) {
    const data = snapshot.val();
    dispatch(updateTask({ id: snapshot.key, ...data }));
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

export const deleteTask = taskId => async (dispatch, getState) => {
  const { uid } = getState().login.user;
  const taskRef = database.ref(`users/${uid}/tasks/${taskId}`);
  try {
    await taskRef.remove();
  } catch (error) {
    console.log(error);
  }
};
