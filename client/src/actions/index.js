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
export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const LOGOUT = 'LOGOUT';

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

actions.changeView = view => {
  return {
    type: CHANGE_VIEW,
    view
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

actions.login = () => {
  return {
    type: LOGIN
  };
};

actions.signup = () => {
  return {
    type: SIGNUP
  };
};

actions.logout = () => {
  return {
    type: LOGOUT
  };
};
