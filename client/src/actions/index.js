import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  TRIGGER_AUTH
} from './types';

const ROOT_URL = 'http://localhost:3001'; // Server URL

export function loginUser({ username, password }) {
  console.log(username, password);
  return function(dispatch) {
    // Submit username/password to the server
    axios.post(`${ROOT_URL}/login`, { username, password })
      .then(response => {
        console.log(response);
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        dispatch({ type: TRIGGER_AUTH, value: false });
        // - Save the JWT token
        localStorage.setItem('token', response.data.token);
        // - redirect to the route '/feature'
        browserHistory.push('/homepage');
      })
      .catch((err) => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function signupUser({ username, password, email }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { username, password, email })
      .then(response => {
        dispatch({ type: AUTH_USER });
        dispatch({ type: TRIGGER_AUTH, value: false });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/homepage');
      })
      .catch(response => dispatch(authError(response.data.error)));
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        });
      });
  }
}

export function triggerAuth(value) {
  return {
    type: TRIGGER_AUTH,
    value 
  }
}
