import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import openAuthReducer from './reducer_openAuth';
import authReducer from './reducer_auth';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  authOpened: openAuthReducer
});

export default rootReducer;
