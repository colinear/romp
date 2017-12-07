import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  OPEN_AUTH,
  GET_EVENT
} from './types';

const ROOT_URL = 'http://localhost:3001'; // Server URL

export function loginUser(userData) {
  return function(dispatch) {
    // Submit username/password to the server
    axios.post(`${ROOT_URL}/login`, userData)
      .then(response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        dispatch({ type: OPEN_AUTH, value: false });
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

export function signupUser(userData) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, userData)
      .then(response => {
        dispatch({ type: AUTH_USER });
        dispatch({ type: OPEN_AUTH, value: false });
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

export function openAuth(value) {
  return {
    type: OPEN_AUTH,
    value 
  }
}

export function getEvent(eventID) {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/event/${eventID}`)
    .then((event) => {
      dispatch ({type: GET_EVENT, event})
    })
    .catch(err => console.log('Error while retrieving event.'));
  }
}
