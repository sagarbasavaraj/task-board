import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import taskBoardReducer from '../reducers/task-board-reducer';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    taskBoardReducer,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

export {store, history};
