import { GET_GAMES } from '../actions/types';

export default function (state = null, action) {
  switch(action.type) {
    case GET_GAMES: 
      return action.event;
    default: 
      return state;
  }
}