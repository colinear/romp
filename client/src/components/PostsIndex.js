import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/index.js';

class PostsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props);
    return <div> Posts Index </div>;
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
