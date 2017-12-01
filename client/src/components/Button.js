import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/index.js';
import { bindActionCreators } from 'redux';

const Button = (props) => (
  <button onClick={props.increment}>Click Me</button>
);

function mapStateToProps(state) {
  return undefined;
}

function mapDispatchToProps(dispatch) {
  // Whenever increment is called, the result
  // should be passed to all of our reducers.
  return bindActionCreators({ increment, decrement }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);