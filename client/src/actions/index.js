// Imports
import axios from 'axios';

const CLIENT_ID = require('../twitch.js');

// Constants
const ROOT_URL = 'https://api.twitch.tv/kraken/streams';

// action.type constants
export const FETCH_POSTS = 'FETCH_POSTS';
export const CHANGE_VIEW = 'CHANGE_VIEW';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Actions object
// TODO: Should actions be assigned within object assignment?
// NOTE: This export might look confusing, but it's not exporting 
//  the object before its methods are being added.
export const actions = {};

actions.fetchPosts = () => {
  const request = axios({
    method: 'GET',
    url: ROOT_URL,
    headers: { 'Client-ID': CLIENT_ID }
  });

  return {
    type: FETCH_POSTS,
    payload: request
  };
};

actions.changeView = state => {
  return {
    type: CHANGE_VIEW,
    view: state
  };
};

actions.increment = () => {
  return {
    type: INCREMENT
  };
};

actions.decrement = () => {
  return {
    type: DECREMENT
  };
};