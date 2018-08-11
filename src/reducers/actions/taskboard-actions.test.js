import { setSelectedTaskId, toggleTaskDialog } from './taskboard-actions';
import { taskboardActionTypes } from './types';

jest.mock('firebase', () => ({
  initializeApp: () => {},
  database: () => {}
}));

describe('Taskboard actions', () => {
  it('should setup set selected taskId action object', () => {
    const action = setSelectedTaskId(1);
    expect(action).toEqual({
      type: taskboardActionTypes.SET_SELECTED_TASK,
      payload: { taskId: 1 }
    });
  });

  it('should setup toggle task dialog action object with action type open', () => {
    const action = toggleTaskDialog('open');
    expect(action).toEqual({
      type: taskboardActionTypes.TOGGLE_TASK_DIALOG,
      payload: { actionType: 'open' }
    });
  });

  it('should setup toggle task dialog action object with action type close', () => {
    const action = toggleTaskDialog('close');
    expect(action).toEqual({
      type: taskboardActionTypes.TOGGLE_TASK_DIALOG,
      payload: { actionType: 'close' }
    });
  });
});
