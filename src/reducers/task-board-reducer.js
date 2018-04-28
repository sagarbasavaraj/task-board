import { taskboardActionTypes } from './actions/types';

const { TOGGLE_ADD_TASK_DIALOG } = taskboardActionTypes;

const INITIAL_STATE = {
  openAddTaskDialog: false,
  tasks: {}
};

const taskboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_ADD_TASK_DIALOG: {
      const { openAddTaskDialog } = state;
      return state.setIn(['openAddTaskDialog'], !openAddTaskDialog);
    }
    default: {
      return state;
    }
  }
};

export default taskboardReducer;
