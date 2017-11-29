import { combineReducers } from 'redux';
import AppReducer from './reducer_books';

const rootReducer = combineReducers({
  books: AppReducer
});

export default rootReducer;