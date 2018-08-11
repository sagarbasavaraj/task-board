import Immutable from 'seamless-immutable';
import taskboardReducer from './task-board-reducer';
import { taskboardActionTypes } from './actions/types';

describe('Taskboard Reducer', () => {
  let initialState;

  beforeAll(() => {
    initialState = Immutable({
      openTaskDialog: false,
      tasks: {},
      selectedTaskId: null,
      actionType: null
    });
  });

  test('should setup initial state', () => {
    const state = taskboardReducer(undefined, { actionType: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  test('should set task', () => {
    const id = '1';
    const state = taskboardReducer(initialState, {
      type: taskboardActionTypes.SET_TASK,
      payload: {
        task: {
          id,
          title: 'test1',
          priority: 'low',
          status: 'new',
          description: 'complete test'
        }
      }
    });
    expect(state.tasks[id]).not.toBeUndefined();
  });

  test('should reset to initial state', () => {
    const id = '1';
    const state = taskboardReducer(undefined, {
      type: taskboardActionTypes.RESET_TASKBOARD
    });
    expect(state).toEqual(initialState);
  });

  test('should set the selected task id', () => {
    const id = '1';
    const state = taskboardReducer(initialState, {
      type: taskboardActionTypes.SET_SELECTED_TASK,
      payload: { taskId: id }
    });
    expect(state.selectedTaskId).toEqual(id);
  });

  test('should remove the selected task', () => {
    const id = '1';
    const currentState = {
      selectedTaskId: id,
      tasks: {
        [id]: {
          id,
          title: 'test1',
          priority: 'low',
          status: 'new',
          description: 'complete test'
        }
      }
    };
    const state = taskboardReducer(Immutable(currentState), {
      type: taskboardActionTypes.REMOVE_TASK,
      payload: { taskId: id }
    });
    expect(state.tasks[id]).toBeUndefined();
    expect(state.selectedTaskId).toBeNull();
  });
});
