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
      users: []
    };
  }

  componentDidMount() {
    // Make call to the server for the particular event here using an action.
    this.props.getEvent(this.props.routeParams.eventid);
    this.getUsers();
  }

  getUsers = async () => {
    let data = await axios.get(`${ROOT_URL}/users`);
    let users = data.data;
    this.setState({ users });
  };

  getSpectators = (users) => {
    let spectators = this.props.event.data.spectators;
    return users.filter(user => {
      for (var n = 0; n < spectators.length; n++) {
        if (spectators[n] === user._id) {
          return true;
        }
      }
    }).map((user, index) => {
      console.log(user);
      let profilePic = user.profilePicURL;
      return <img width="50" height="50" src={profilePic} />;
    });
  };

  render() {
    if (this.props.event) {
      // Pull properties off event.
      let { name, description, liveStream, spectators, notes, teams, pictureURL, game } = this.props.event.data;
      let { users } = this.state;
      // If image is undefined, make it a filler image.

      return (
        <Segment>
          <Grid>
            <Grid.Row>
              <Grid.Column width={5}>
                <Image src={pictureURL} />
              </Grid.Column>
              <Grid.Column width={11}>
                <h1>{name}</h1>
                <p>{description}</p>
                <p>{notes}</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              <h2>Spectators</h2>
              {this.getSpectators(users)}
            </Grid.Column>
          </Grid.Row>
        </Segment>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

function mapStateToProps({ event }) {
  return { event };
}

export default connect(mapStateToProps, { getEvent })(EventPage);
