import { GET_FRIENDS, UNSET_FRIENDS } from '../actions/types';

export default function (state = [], action) {
  switch(action.type) {
    case GET_FRIENDS:
      return action.friends;
    case UNSET_FRIENDS:
      return [];
    default:
      return state;
  }
}
