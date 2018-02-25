import { createStore, applyMiddleware } from 'redux';
import { combineReducers, routerReducer } from 'redux-seamless-immutable';
import { routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
//import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';

import taskBoardReducer from '../reducers/task-board-reducer';

const history = createHistory();

const middlewares = [routerMiddleware(history), thunk];

const store = createStore(
  combineReducers({
    taskBoardReducer,
    router: routerReducer,
    form: formReducer
  }),
  applyMiddleware(...middlewares)
  //composeWithDevTools(applyMiddleware(...middlewares))
);

export { store, history };
