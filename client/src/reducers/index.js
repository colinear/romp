import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import openAuthReducer from './reducer_openAuth';
import authReducer from './reducer_auth';
import getEventReducer from './reducer_getEvent';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  authOpened: openAuthReducer,
  event: getEventReducer
});

export default rootReducer;
