import _ from 'lodash';
import { combineReducers } from 'redux';

const initialState = {
  view: 'HomePage',
  counter: 0,
  posts: {}
};

var CounterReducer = function(state = initialState.counter, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

var PostsReducer = function(state = initialState.posts, action) {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default: {
      return state;
    }
  }
};

var ViewReducer = function(state = initialState.view, action) {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return action.view;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: CounterReducer,
  view: ViewReducer,
  posts: PostsReducer
});

export default rootReducer;
