import React from 'react';
import axios from 'axios';
import faker from 'faker';

const ROOT_URL = 'http://localhost:3001'; // Server URL

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

class RandomEventGenerator extends React.Component {

  randomizeEvent = async () => {
    let data = await axios.get(`${ROOT_URL}/users`);
    let users = data.data;
    let name = faker.lorem.sentence();
    let location = `${faker.address.city()}, ${faker.address.state()}`;
    let creator = users[integer(users.length)]._id;
    let winner = users[integer(users.length)]._id;
    let description = faker.lorem.sentences();
    let spectators = users.slice(integer(users.length, "first"), integer(users.length, "last"));
    let notes = faker.lorem.sentence();
    let pictureURL = faker.random.image();

    let eventData = { name, location, creator, winner, description, spectators, notes, pictureURL }
    this.sendEvent(eventData);
  }

  sendEvent = (eventData) => {
    axios.post(`${ROOT_URL}/createEvent`, eventData);
  }

  render() {
    return <button onClick={this.randomizeEvent}>Randomize Event</button>
  }
}

export default RandomEventGenerator
