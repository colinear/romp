import axios from 'axios';
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
  JOIN_EVENT,
  ADD_FRIEND,
  GET_USER,
  REMOVE_FRIEND,
  GET_FRIENDS,
  UNSET_FRIENDS,
  TOGGLE_PROFILE_SETTINGS_MODAL,
} from './types';

const ROOT_URL = process.env.HOST || `http://localhost:3001`;
console.log('ROOT_URL ', ROOT_URL);

export function loginUser(userData) {
  return function(dispatch) {
    console.log(userData);
    // Submit username/password to the server
    axios.post(`${ROOT_URL}/login`, userData)
      .then(response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        dispatch({ type: OPEN_AUTH, value: false });
        dispatch({ type: SET_USER, user: response.data.user });
        dispatch({ type: GET_FRIENDS, friends: response.data.user.friends })
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

export function signupUser(userData, callback) {
  console.log(userData, callback);
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, userData)
      .then(response => {
        console.log('Signup successful!');
        callback();
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/homepage');

      })
      .catch(response => dispatch(authError(response.data.error)));
  }
}

export function createEvent({ event, game, location, description, creator, participants, pictureURL, createdAt, eventAt }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/createEvent`, { event, game, location, description, creator, participants, pictureURL, createdAt, eventAt })
      .then(response => {
        dispatch({ type: AUTH_USER });
        let eventID = response.data;
        browserHistory.push(`/event/${eventID}`);
        browserHistory.go(`/event/${eventID}`);
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
    dispatch({ type: UNSET_FRIENDS })
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
          console.log('GAME SEARCH RESULTS: ', results);
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

export function joinEvent({ userID, eventID }, callback) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/joinEvent`, { userID, eventID })
      .then(response => {
        dispatch({ type: JOIN_EVENT });
        browserHistory.push(`/event/${eventID}`);
        callback();
      })
      .catch(err => console.log('error joining event: ', err));
  }
}

export function addFriend({ userID, curUserID }, callback) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/addFriend`, { userID, curUserID })
      .then(res => {
        dispatch({ type: ADD_FRIEND });
        callback();
      })
      .catch(err => console.log('error adding user: ', err));
  }
}

export function getFriends(curUser, callback) {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/users/${curUser.username}`)
    .then((res) => {
      dispatch ({type: GET_FRIENDS, friends: res.data.friends})
      callback();
    })
    .catch(err => console.log('Error while retrieving event.'));
  }
}

export function removeFriend({ userID, curUserID }, callback) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/removeFriend`, { userID, curUserID })
      .then(res => {
        dispatch({ type: REMOVE_FRIEND });
        callback();
      })
      .catch(err => console.log('error adding user: ', err));
  }
}

export function toggleProfileSettingsModal(value) {
  return { type: TOGGLE_PROFILE_SETTINGS_MODAL, value }

};
