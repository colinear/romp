import { JOIN_EVENT } from '../actions/types';

export default function (state = null, action) {
  switch(action.type) {
    case JOIN_EVENT: 
      return action.participants;
    default: 
      return state;
  }
}