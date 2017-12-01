import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  counter: CounterReducer,
  view: ViewReducer
});

const initialState = {
  view: 'HomePage',
  counter: 0
};

var CounterReducer = function(state = initialState.counter, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

var ViewReducer = function(state = initialState.view, action) {
  switch(action.type) {
    case 'CHANGE_VIEW':
      return action.view;
    default:
      return state;
  }
};

export default rootReducer;