import { taskboardActionTypes } from './actions/types';

const {
  TOGGLE_TASK_DIALOG,
  SET_TASK,
  REMOVE_TASK,
  RESET_TASKBOARD,
  SET_SELECTED_TASK
} = taskboardActionTypes;

const INITIAL_STATE = {
  openTaskDialog: false,
  tasks: {},
  selectedTaskId: null
};

const taskboardReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_TASK_DIALOG: {
      const { openTaskDialog } = state;
      return state.setIn(['openTaskDialog'], !openTaskDialog);
    }
    case SET_TASK: {
      const { task } = payload;
      return state.setIn(['tasks', `${task.id}`], task);
    }
    case REMOVE_TASK: {
      const { taskId } = payload;
      return state
        .setIn(['tasks'], state.tasks.without(`${taskId}`))
        .setIn(['selectedTaskId'], null);
    }
    case SET_SELECTED_TASK: {
      return state.setIn(['selectedTaskId'], payload.taskId);
    }
    case RESET_TASKBOARD: {
      return INITIAL_STATE;
    }
    default: {
      return state;
    }
  }
};

export default taskboardReducer;
