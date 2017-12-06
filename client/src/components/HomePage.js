import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import Carousel from './Carousel.js';

class HomePage extends React.Component {
  render() {
    return (
      <Segment>
        <Carousel />
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(HomePage);
