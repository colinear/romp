import { GET_FRIENDS } from '../actions/types';

export default function (state = null, action) {
  switch(action.type) {
    case GET_FRIENDS:
      return action.friends;
    default:
      return state;
  }
}
