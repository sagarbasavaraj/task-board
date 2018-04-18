import { taskboardActionTypes } from './types';

const { TOGGLE_CREATE_TASK_DIALOG } = taskboardActionTypes;

const toggleCreateTaskDialog = () => ({
  type: TOGGLE_CREATE_TASK_DIALOG
});

export const taskboardActions = { toggleCreateTaskDialog };
