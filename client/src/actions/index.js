// Imports
import axios from 'axios';

// Constants
const ROOT_URL = 'https://api.twitch.tv/kraken/games/top';
// const API_KEY = '?key=PAPERCLIP1234';

// Actions object
let actions = {};

actions.fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/`);
  return {
    type: 'FETCH_POSTS',
    payload: request
  }
}

actions.changeView = (state) => {
  return {
    type: 'CHANGE_VIEW',
    view: state
  }
}

actions.increment = () => {
  return {
    type: 'INCREMENT'
  }
}

actions.decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

export default actions;