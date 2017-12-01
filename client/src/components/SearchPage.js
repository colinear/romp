import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import { changeView } from '../actions/actions_homepage.js';
import { bindActionCreators } from 'redux';

class SearchPage extends React.Component {
  render() {
    return (
      <Segment>
        <p>Hello</p>
        <button onClick={() => {
        this.props.changeView('HomePage')
        console.log(this.props);
      }}>Home</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);