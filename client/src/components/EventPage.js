import React from 'react';
import { connect } from 'react-redux';
import { Grid, Image, Segment, Button } from 'semantic-ui-react';
import { getEvent, joinEvent } from '../actions/index.js';
import { Link } from 'react-router';

import axios from 'axios';
const ROOT_URL = 'http://localhost:3001'; // Server URL

const fillerImage = 'http://www.fillmurray.com/300/200';

class EventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // these need to be event specific, not on state
      // TODO: add to each event in db (similar to participants)
      users: [],
      creator: null,
      teams: null,
      players: [],
    };
  }

  joinThisEvent = () => {
    let userID = this.props.user._id;
    let eventID = this.props.event._id;
    // console.log('this.props.event: ', this.props.event)
    this.props.joinEvent({ userID, eventID }, () => {
      this.props.getEvent(eventID, () => {
        this.displayParticipants()
      })
    })

    // TODO[STRETCH]: add user to team and team to event??
  }

  displayParticipants = () => {
    let participants = this.props.event.participants;
    return participants.map((user, index) => {
      let profilePic = user.profilePicURL;
      return (
        <span style={{ margin: '2px' }}>
          <Link to={`${ROOT_URL}/user/${user._id}`}>
            <img width="100" height="100" src={profilePic} />
          </Link>
        </span>
      );
    });
  };

  componentDidMount() {
    this.props.getEvent(this.props.routeParams.eventid, () => {
      this.getUsers();
      this.getCreatorUsername();
      this.getTeams();
    });
  }

  getUsers = async () => {
    let users = (await axios.get(`${ROOT_URL}/users`)).data;
    this.setState({ users });
  };

  getCreatorUsername = async () => {
    let creator = await axios.get(`${ROOT_URL}/users/${this.props.event.creator}`);
    this.setState({ creator });
  };

  getTeams = async () => {
    let teams = (await axios.get(`${ROOT_URL}/teams_events/getTeamsForEvent/${this.props.event._id}`)).data;
    this.getUsersPerTeam(teams);
  };

  // TODO: Change all instance of players into members, except watch out for this function!!!
  getUsersPerTeam = teams => {
    let getPlayers = async (memberID, team, player) => {
      // Grab user.
      let user = (await axios.get(`${ROOT_URL}/users/${memberID}`)).data;
      // Set the state.
      this.setState((prevState, props) => {
        // Grab previous players array.
        let players = prevState.players.slice();
        // Push user onto the array by team.
        if (players[team] === undefined) {
          players[team] = [];
        }
        players[team].push(user);
        // Set the state of players.
        return { players };
      });
    };

    // Iterate through teams.
    for (var team = 0; team < teams.length; team++) {
      // Iterate through players on each team.
      for (var player = 0; player < teams[team].players.length; player++) {
        // Get the users associated with each player.
        getPlayers(teams[team].players[player], team, player);
      }
    }
  };

  getPlayers = () => {
    let arr = [];
    return this.state.players.map((team, teamIndex) => {
      if (teamIndex === this.state.players.length - 1) {
        return (
          <div>
            {team.map((player, playerIndex) => {
              return (
                <Link to={`/user/${player._id}`}>
                  <img width="50" height="50" src={player.profilePicURL} />
                </Link>
              );
            })}
          </div>
        );
      } else {
        return (
          <div>
            {team.map((player, playerIndex) => {
              return (
                <Link to={`/user/${player._id}`}>
                  <img width="50" height="50" src={player.profilePicURL} />
                </Link>
              );
            })}{' '}
            <div>VS.</div>
          </div>
        );
      }
    });
  };

  render() {
    if (this.props && this.props.event) {
      // Pull properties off event.
      let { event, description, location, liveStream, spectators, notes, teams, pictureURL, game, eventAt } = this.props.event;
      let { users, creator } = this.state;
      return (
        <Segment>
          <Grid>
            <Grid.Row>
              <Grid.Column width={15} />
              <Grid.Column width={1}>
                <Button onClick={this.joinThisEvent}>Join Event</Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={5}>
                <Image src={pictureURL} />
              </Grid.Column>
              <Grid.Column width={11}>
                <h1>{event}</h1>
                <p>@ {location}</p>
                {creator ? (
                  <p>Hosted by: <Link to={`/user/${this.props.event.participants[0].username}`}>{this.props.event.participants[0].username}</Link></p>
                ) : null}
                <p>Game: {game}</p>
                <p>Description: {description}</p>
                <p>{notes}</p>
                <p>Time: {JSON.stringify(eventAt)}</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              <h2>Players</h2>
              {this.displayParticipants()}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <div style={{ display: 'block' }}>
              <h2>Teams</h2>
            </div>
          </Grid.Row>
          <Grid.Row>
            <div style={{ display: 'block', textAlign: 'center' }}>
              {this.state.players.length !== 0 ? this.getPlayers() : <div>Loading...</div>}
            </div>
          </Grid.Row>
        </Segment>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

function mapStateToProps({ event, user }) {
  return { event, user };
}

export default connect(mapStateToProps, { getEvent, joinEvent })(EventPage);
