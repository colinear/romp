import axios from 'axios';
import { IGDB_KEY } from '../config'
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  OPEN_AUTH,
  GET_EVENT,
  GET_GAMES,
  SEARCH,
  SET_USER,
  GET_EVENTS,
  UNSET_USER,
  JOIN_EVENT
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
        dispatch({ type: SET_USER, user: response.data.user});
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

export function createEvent({ event, game, location, description }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/createEvent`, { event, game, location, description })
      .then(response => {
        dispatch({ type: AUTH_USER });
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
  return function(dispatch) {
    dispatch({ type: UNAUTH_USER });
    dispatch({ type: UNSET_USER });
  }
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

export function getEvent(eventID, callback) {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/event/${eventID}`)
    .then((event) => {
      dispatch ({type: GET_EVENT, event})
      callback();

    })
    .catch(err => console.log('Error while retrieving event.'));
  }
}

export function getGames() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/games`)
    //?fields=name,popularity&order=popularity:asc`) //?fields=name,popularity&order=popularity:desc`)
    .then((games) => {
      dispatch ({ type: GET_GAMES, games: games.data.body });
      // console.log('games in actions AFTER dispatch: ', games.data.body)
    })
    .catch(err => console.log('Error while retrieving games.'));
  }
}

export function search(query) {
  console.log('QUERY: ', query);
  return function(dispatch) {
    axios.post(`${ROOT_URL}/search`, {query})
    .then((results) => {
      if(results.data.users.length === 0 && results.data.events.length === 0) {
        axios.post(`${ROOT_URL}/gameSearch`, {query})
        .then((results) => {
          dispatch({type: SEARCH, results: results})
        })
      } else {
        dispatch({type: SEARCH, results: results})
      }
    })
    .catch(err => console.log('Error while searching.'))
    // .catch(err => console.log('Error while searching.'))
  }
}

// Gets random events from the database.
export function getEvents(callback) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/events`, {})
    .then((events) => {
      dispatch({type: GET_EVENTS, events: events.data});
      callback(events.data);
    })
    .catch(err => console.log('There has been an error.'));
  }
}

export function joinEvent({ userID, eventID }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/joinEvent`, { userID, eventID })
      .then(response => {
        dispatch({ type: JOIN_EVENT });
        browserHistory.push(`${ROOT_URL}/event/${eventID}`);
      })
      .catch(err => console.log('error in index at line166: ', err));
  }
}

