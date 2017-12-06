import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
  return (
    <div>{props.counter}</div>
  );
}

var mapStateToProps = function(state) {
  return state;
}

export default connect(mapStateToProps)(Counter);