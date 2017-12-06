import { TRIGGER_AUTH } from '../actions/types';

export default function (state = false, action) {
  switch(action.type) {
    case TRIGGER_AUTH: 
      return action.value
    default: 
      return state;
  }
}