import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import openAuthReducer from './reducer_openAuth';
import authReducer from './reducer_auth';
import getEventReducer from './reducer_getEvent';
import getGamesReducer from './reducer_getGames';
import searchReducer from './reducer_search';


const rootReducer = combineReducers({
  form,
  auth: authReducer,
  authOpened: openAuthReducer,
  event: getEventReducer,
  games: getGamesReducer,
  results: searchReducer
});

export default rootReducer;
