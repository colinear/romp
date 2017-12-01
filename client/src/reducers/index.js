import { combineReducers } from 'redux';
import CounterReducer from './reducer_counter.js';
import HomePageReducer from './reducer_homepage.js';

const rootReducer = combineReducers({
  counter: CounterReducer,
  view: HomePageReducer
});

export default rootReducer;