import { GET_EVENTS } from '../actions/types';

export default function (state = null, action) {
  switch(action.type) {
    case GET_EVENTS: 
      return action.events;
    default: 
      return state;
  }
}