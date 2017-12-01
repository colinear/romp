import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import { changeView } from '../actions/index.js';
import { bindActionCreators } from 'redux';

import Carousel from './Carousel.js';

class HomePage extends React.Component {
  render() {
    return (
      <Segment>
      <Carousel />
      <button onClick={() => {
        this.props.changeView('SearchPage')
        console.log(this.props);
      }}>Search</button>
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeView }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);