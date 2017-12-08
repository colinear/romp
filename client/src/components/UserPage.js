import React from 'react';
import { connect } from 'react-redux';
import { getEvent } from '../actions/index.js';
import { Grid, Image, Segment } from 'semantic-ui-react';

import axios from 'axios';
const ROOT_URL = 'http://localhost:3001'; // Server URL

const fillerImage = 'http://www.fillmurray.com/300/200';


class EventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  getUser = async () => {
    let data = await axios.get(`${ROOT_URL}/users/${this.props.routeParams.eventid}`);
  };

  render() {
    return <Segment>User profile goes here</Segment>
  }
}

function mapStateToProps({ event }) {
  return { event };
}

export default connect(mapStateToProps, { getEvent })(EventPage);
