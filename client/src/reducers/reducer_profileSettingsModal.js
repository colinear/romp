import {
  TOGGLE_PROFILE_SETTINGS_MODAL
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case TOGGLE_PROFILE_SETTINGS_MODAL:
      return action.value;
    default: 
      return state;
  }
}
