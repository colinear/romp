import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import needsAuthReducer from './reducer_needsAuth';
import authReducer from './reducer_auth';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  needsAuth: needsAuthReducer
});

export default rootReducer;
