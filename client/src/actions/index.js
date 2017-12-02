// Imports
import axios from 'axios';

const CLIENT_ID = require('../twitch.js');

// Constants
const ROOT_URL = 'https://api.twitch.tv/kraken/streams';

// Actions object
let actions = {};

actions.fetchPosts = async () => {
  const request = await axios({
    method: 'GET',
    url: ROOT_URL,
    headers: { 'Client-ID': CLIENT_ID }
  });

  return {
    type: 'FETCH_POSTS',
    payload: request.data
  };
};

actions.changeView = state => {
  return {
    type: 'CHANGE_VIEW',
    view: state
  };
};

actions.increment = () => {
  return {
    type: 'INCREMENT'
  };
};

actions.decrement = () => {
  return {
    type: 'DECREMENT'
  };
};

export default actions;
