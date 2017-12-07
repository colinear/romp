import { OPEN_AUTH } from '../actions/types';

export default function (state = false, action) {
  console.log(state, action.value);

  switch(action.type) {
    case OPEN_AUTH: 
      return action.value;
    default: 
      return state;
  }
}