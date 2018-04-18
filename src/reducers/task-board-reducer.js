import { taskboardActionTypes } from './actions/types';

const { TOGGLE_CREATE_TASK_DIALOG } = taskboardActionTypes;

const INITIAL_STATE = {
  openCreateTaskDialog: false,
  tasks: {}
};

const taskboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CREATE_TASK_DIALOG: {
      const { openCreateTaskDialog } = state;
      return state.setIn(['openCreateTaskDialog'], !openCreateTaskDialog);
    }
    default: {
      return state;
    }
  }
};

export default taskboardReducer;
