// import _ from 'lodash';
import { combineReducers } from 'redux';
import { 
  FETCH_POSTS, 
  CHANGE_VIEW, 
  INCREMENT, 
  DECREMENT, 
  LOGIN,
  SIGNUP
} from '../actions/index.js';

const initialState = {
  view: 'SearchPage',
  counter: 0,
  posts: {}
};

var counterReducer = function(state = initialState.counter, action) {
  console.log(state);
  switch (action.type) {
    case INCREMENT:
      return +state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

var postsReducer = function(state = initialState.posts, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload.data;
    default: {
      return state;
    }
  }
};

var viewReducer = function(state = initialState.view, action) {
  switch (action.type) {
    case CHANGE_VIEW:
      return action.view;
    default:
      return state;
  }
};

var credentialsReducer = function(state = initialState.view, action) {
  switch (action.type) {
    case LOGIN:
      return 'login'
    case SIGNUP:
      return 'signup'
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter: counterReducer,
  view: viewReducer,
  posts: postsReducer,
  credentialsView: credentialsReducer
});

export default rootReducer;
