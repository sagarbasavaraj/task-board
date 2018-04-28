import { taskboardActionTypes } from './types';

const { TOGGLE_ADD_TASK_DIALOG } = taskboardActionTypes;

const toggleAddTaskDialog = () => ({
  type: TOGGLE_ADD_TASK_DIALOG
});

export const taskboardActions = { toggleAddTaskDialog };
