import { combineReducers } from 'redux';
import AppReducer from './reducer_app.js';

const rootReducer = combineReducers({
  counter: AppReducer
});

export default rootReducer;