import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { matrixReducer } from './matrix/reducer';

const composedEnhancer = composeWithDevTools();

export const reducer = combineReducers({
  matrix: matrixReducer,
});

export const store = createStore(reducer, composedEnhancer);
