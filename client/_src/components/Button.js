import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../actions/index.js';

const Button = (props) => {
  return (
    <button onClick={props.increment}>Button</button>
  );
}

var mapDispatchToProps = function(dispatch) {
  return bindActionCreators(actions, dispatch);
};

export default connect(null, mapDispatchToProps)(Button);