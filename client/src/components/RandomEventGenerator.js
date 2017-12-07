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
    let name = faker.lorem.sentence();
    let location = `${faker.address.city()}, ${faker.address.state()}`;
    let creator = users[integer(users.length)]._id;
    let winner = users[integer(users.length)]._id;
    let description = faker.lorem.sentences();
    let spectators = users.slice(integer(users.length), integer(users.length));
    let notes = faker.lorem.sentence();
    let image = faker.random.image();

    let eventData = { name, location, creator, winner, description, spectators, notes, image }
    this.sendEvent(eventData);
  }

  sendEvent = async (eventData) => {
    let response = await axios.post(`${ROOT_URL}/createEvent`, eventData);
    console.log(response);
  }

  render() {
    return <button onClick={this.randomizeEvent}>Randomize Event</button>
  }
}

export default RandomEventGenerator;