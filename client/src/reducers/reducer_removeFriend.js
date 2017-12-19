import { REMOVE_FRIEND } from '../actions/types';

export default function (state = null, action) {
  switch(action.type) {
    case REMOVE_FRIEND:
      return action.friends;
    default:
      return state;
  }
}
