import React from 'react';
import { connect } from 'react-redux';

import { getEvent } from '../actions/index.js';

class EventPage extends React.Component {
  componentWillMount() {
    // Make call to the server for the particular event here using an action.
    this.props.getEvent(this.props.routeParams.eventid);
  }

  render() {
    // If no event data is loaded, then simply return "loading".
    if (!this.props.event) {
      return <div>Loading...</div>
    }
    if (this.props) {
      return <div>{JSON.stringify(this.props.event)}</div>
    }
  }
}

function mapStateToProps({ event }) {
  return { event } ;
}

export default connect(mapStateToProps, { getEvent })(EventPage);