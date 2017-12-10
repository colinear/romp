import { SET_USER, UNSET_USER } from '../actions/types';

export default function (state = '', action) {
  switch(action.type) {
    case SET_USER: 
      return action.user;
    case UNSET_USER:
      return '';
    default: 
      return state;
  }
}