import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import openAuthReducer from './reducer_openAuth';
import authReducer from './reducer_auth';
import getEventReducer from './reducer_getEvent';
import getGamesReducer from './reducer_getGames';
import searchReducer from './reducer_search';
import setUserReducer from './reducer_setUser';
import getEventsReducer from './reducer_getEvents';
import joinEventReducer from './reducer_joinEvent';
import addFriendReducer from './reducer_addFriend';
import profileSettingsModalReducer from './reducer_profileSettingsModal';


const rootReducer = combineReducers({
  form,
  auth: authReducer,
  authOpened: openAuthReducer,
  event: getEventReducer,
  games: getGamesReducer,
  results: searchReducer,
  user: setUserReducer,
  events: getEventsReducer,
  profileSettingsOpened: profileSettingsModalReducer
});

export default rootReducer;
