import { GET_EVENT } from '../actions/types';

export default function (state = null, action) {
  switch(action.type) {
    case GET_EVENT: 
      return action.event;
    default: 
      return state;
  }
}