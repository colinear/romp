const initialState = 'HomePage';

export default function (state = initialState, action) {
  switch(action.type) {
    case 'CHANGE_VIEW':
      return action.view;
    default:
      return state;
  }
}