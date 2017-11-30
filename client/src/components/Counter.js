// Libraries
import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => (
  <div>{props.counter}</div>
);

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Counter);
