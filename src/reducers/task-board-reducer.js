import { taskboardActionTypes } from './actions/types';

const { TOGGLE_ADD_TASK_DIALOG, ADD_TASK } = taskboardActionTypes;

const INITIAL_STATE = {
  openAddTaskDialog: false,
  tasks: {}
};

const taskboardReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_ADD_TASK_DIALOG: {
      const { openAddTaskDialog } = state;
      return state.setIn(['openAddTaskDialog'], !openAddTaskDialog);
    }
    case ADD_TASK: {
      const { task } = payload;
      return state.setIn(['tasks', `${task.id}`], task);
    }
    default: {
      return state;
    }
  }
};

export default taskboardReducer;
