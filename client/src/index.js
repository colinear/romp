import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Feature from './components/Feature';
import PhotoGrid from './components/PhotoGrid';
import RequireAuth from './components/auth/require_auth';
import HomePage from './components/HomePage';
import Welcome from './components/Welcome';
import Events from './components/Events';
import reducers from './reducers';
import EventPage from'./components/EventPage';
import { AUTH_USER } from './actions/types';
import UserPage from './components/UserPage';
import GamePage from './components/GamePage';
import SearchPage from './components/SearchPage';
import _Carousel from './components/_Carousel';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers, undefined, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="homepage" component={RequireAuth(HomePage)} />
        <Route path="photos" component={PhotoGrid} />
        <Route exact path="event/:eventid" component={EventPage} />
        <Route exact path="user/:username" component={UserPage} />
        <Route path="search" component={SearchPage} />
        <Route exact path="games/:gameid" component={GamePage} />
        <Route path="carousel" component={_Carousel} /> {/* Carousel for testing purposes. Feel free to remove. */}
      </Route>
    </Router>
  </Provider>
 , document.getElementById('root'));
