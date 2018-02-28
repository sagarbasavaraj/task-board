import { createStore, applyMiddleware } from 'redux';
import { combineReducers, routerReducer } from 'redux-seamless-immutable';
import { routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';

import { reducers } from '../reducers';

const history = createHistory();

const middlewares = [routerMiddleware(history), thunk];

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
    form: formReducer
  }),
  composeWithDevTools(applyMiddleware(...middlewares))
);

export { store, history };
