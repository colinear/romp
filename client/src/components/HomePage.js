import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { actions } from '../actions/index.js';
import PostsIndex from './PostsIndex.js';

import Carousel from './Carousel.js';
import SignupForm from './SignupForm.js';
import RedButton from './RedButton.js';

class HomePage extends React.Component {
  render() {
    return (
      <Segment>
        <Carousel />
        <Link to={'/search'}>
          <button>Search</button>
        </Link>
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps)(HomePage);
