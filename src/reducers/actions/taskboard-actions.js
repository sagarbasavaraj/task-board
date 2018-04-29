import { taskboardActionTypes } from './types';
import { addTask as createTask } from '../../services/taskboard-service';

const { TOGGLE_ADD_TASK_DIALOG, ADD_TASK } = taskboardActionTypes;

const addTask = task => ({ type: ADD_TASK, payload: { task } });

export const toggleAddTaskDialog = () => ({
  type: TOGGLE_ADD_TASK_DIALOG
});

export const startAddTask = (task = {}) => async (dispatch, getState) => {
  const uid = getState().login.user.uid;
  const { title, priority, status, description } = task;
  try {
    const ref = await createTask(uid, { title, priority, status, description });
    dispatch(addTask({ id: ref.key, ...task }));
  } catch (e) {
    console.log(e);
  }
};
