import { combineReducers } from 'redux';
import CounterReducer from './reducer_counter.js';

const rootReducer = combineReducers({
  counter: CounterReducer
});

export default rootReducer;