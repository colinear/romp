import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Button = (props) => (
  <button onClick={props.increment}>Click Me</button>
);

function mapStateToProps(state) {
  return undefined;
}

export default connect(mapStateToProps)(Button);