import React from 'react';
import axios from 'axios';
import faker from 'faker';

const ROOT_URL = 'http://colinear.herokuapp.com/' //|| `http://localhost:3001`;

let integer = (length, half) => {
  let middle = Math.floor(length / 2);
  if (half === "first") {
    return Math.floor(Math.random() * middle);
  } else if (half === "last") {
    let addition = Math.floor(Math.random() * middle)
    return middle + addition;
  } else {
    return Math.floor(Math.random() * length);
  }
}

class RandomTeamGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      games: null,
      events: null
    }
  }

  componentDidMount() {
    // this.getData();
    this.getUsers();
    this.getGames();
    this.getEvents();
    

  }


  // getData = async () => {
  //   // Get lists of users, games, and events.
 

  //   let events = (await axios.post(`${ROOT_URL}/events`)).data;
  //   this.setState({games, events, users});

  // }

  getUsers = async () => {
    let users = (await axios.get(`${ROOT_URL}/users`)).data;
    this.setState({users});
  }

  getGames = async () => {
    let games = (await axios.get(`${ROOT_URL}/games`)).data;
    this.setState({games});
  }

  getEvents = async () => {
    let events = (await axios.post(`${ROOT_URL}/events`, {})).data;
    this.setState({events});
  }

  randomizeTeam = async () => {
    // Pick a slice of games.
    let games = this.state.games.slice(integer(this.state.games.length, 'first'), integer(this.state.games.length, 'last'));

    // Pick a slice of users.
    let players = this.state.users.slice(integer(this.state.users.length, 'first'), integer(this.state.users.length, 'last'));    

    // Pick a slice of events.
    let events = this.state.events.slice(integer(this.state.events.length, 'first'), integer(this.state.events.length, 'last'));

    // Get a name.
    let name = faker.lorem.sentence();

    // Finally, set the team.
    let response = await axios.post(`${ROOT_URL}/team`, {name, games, players, events});
  }

  render() {
    let {events, games, users} = this.state;
    if (events && games && users) {
      return <button onClick={this.randomizeTeam}>Randomize Team</button>
    } else {
      return <div>Loading...</div>
    }
  }
}

export default RandomTeamGenerator;