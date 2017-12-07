import React from 'react';
import axios from 'axios';
import faker from 'faker';

const ROOT_URL = 'http://localhost:3001'; // Server URL

let integer = (length) => {
  return Math.floor(Math.random() * length);
}

class RandomEventGenerator extends React.Component {

  randomizeEvent = async () => {
    let data = await axios.get(`${ROOT_URL}/users`);
    let users = data.data;
    console.log(users);
    let spectators = users.slice(integer(users.length), integer(users.length));

    let eventData = { name, location, creator, winner, description, spectators, notes, image }
    this.sendEvent(eventData);
  }

  sendEvent = async (eventData) => {
    // Add create team
    let response = await axios.post(`${ROOT_URL}/createEvent`, eventData);
    console.log(response);
  }

  render() {
    return <button onClick={this.randomizeEvent}>Randomize Event</button>
  }
}

export default RandomEventGenerator;