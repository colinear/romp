import React from 'react';
import { connect } from 'react-redux';
import { getEvent } from '../actions/index.js';
import { Grid, Image, Segment } from 'semantic-ui-react';
import { Link } from 'react-router';

import axios from 'axios';
const ROOT_URL = 'http://localhost:3001'; // Server URL

const fillerImage = 'http://www.fillmurray.com/300/200';

class EventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      creator: null,
      teams: null,
      players: []
    };
  }

  getUsers = async () => {
    let users = (await axios.get(`${ROOT_URL}/users`)).data;
    this.setState({ users });
  };

  componentDidMount() {
    // Make call to the server for the particular event here using an action.
    this.props.getEvent(this.props.routeParams.eventid, () => {
      this.getUsers();
      this.getCreatorUsername();
      this.getTeams();
    });
  }

  getUsers = async () => {
    let data = await axios.get(`${ROOT_URL}/users`);
    let users = data.data;
    this.setState({ users });
  };

  getSpectators = users => {
    let spectators = this.props.event.data.spectators;
    return users
      .filter(user => {
        for (var n = 0; n < spectators.length; n++) {
          if (spectators[n] === user._id) {
            return true;
          }
        }
      })
      .map((user, index) => {
        let profilePic = user.profilePicURL;
        return (
          <span style={{ margin: '2px' }}>
            <Link to={`${ROOT_URL}/user/${user._id}`}><img width="100" height="100" src={profilePic} /></Link>
          </span>
        );
      });
  };

  getCreatorUsername = async () => {
    let creator = await axios.get(`${ROOT_URL}/users/${this.props.event.data.creator}`);
    this.setState({ creator });
  };

  getTeams = async () => {
    let teams = (await axios.get(`${ROOT_URL}/teams_events/getTeamsForEvent/${this.props.event.data._id}`)).data;
    this.getUsersPerTeam(teams);
    console.log('Teams: ', teams);
    
    
  }

  // TODO: Change all instance of players into members, except watch out for this function!!!
  getUsersPerTeam = (teams) => {

    let getPlayers = async (memberID, team, player) => {
      // Grab user.
      let user = (await axios.get(`${ROOT_URL}/users/${memberID}`)).data;
      // Set the state.
      this.setState((prevState, props) => {
        // Grab previous players array.
        let players = prevState.players.slice();
        // Push user onto the array by team.
        if (players[team] === undefined) {
          players[team] = []
        }
        players[team].push(user);
        console.log('PLAYERS: ', players);
        // Set the state of players.
        return { players };
      });
    }

    // Iterate through teams.
    for (var team = 0; team < teams.length; team++) {
      // Iterate through players on each team.
      for (var player = 0; player < teams[team].players.length; player++) {
        // Get the users associated with each player.
        getPlayers(teams[team].players[player], team, player);
      }
    }
  }

  getPlayers = () => {

    // for (var team = 0; team < this.state.players.length; team++) {
    //   for (var player = 0; player < this.state.players[team].length; player++) {

    //   }
    // }
    return <div>{this.state.players.forEach((team, index) => {
      let fullTeam = team.forEach((player, index) => {
        return <img src={player.profilePicURL} />
      });
      
      // Determine whether to attach 'VS.' on the end.
      if (index === this.state.players.length - 1) {
        return <div>{fullTeam}</div>
      } else {
        return <div>{fullTeam} VS. </div>
      }
    })}</div>;
  }

  render() {
    if (this.props.event) {
      // Pull properties off event.
      let {
        name,
        description,
        location,
        liveStream,
        spectators,
        notes,
        teams,
        pictureURL,
        game
      } = this.props.event.data;
      let { users, creator } = this.state;
      return (
        <Segment>
          <Grid>
            <Grid.Row>
              <Grid.Column width={5}>
                <Image src={pictureURL} />
              </Grid.Column>
              <Grid.Column width={11}>
                <h1>{name}</h1>
                <p>{location}</p>
                {creator ? (
                  <div>
                    <img height="100" width="100" src={creator.data.profilePicURL} />
                    <h5 style={{ marginTop: 2 }}>{creator.data.username}</h5>
                  </div>
                ) : null}
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
          <Grid.Row>
            <h2>Teams</h2>
            {this.getPlayers()}
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
