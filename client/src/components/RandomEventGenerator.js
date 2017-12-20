import React from 'react';
import axios from 'axios';
import faker from 'faker';

// const ROOT_URL = process.env.HOST //'http://localhost:3001'; // Server URL
const ROOT_URL = 'http://colinear.herokuapp.com:3001';

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
    let users = (await axios.get(`${ROOT_URL}/users`)).data;
    let teams = (await axios.get(`${ROOT_URL}/teams`)).data;
    let event = faker.lorem.sentence();
    let location = `${faker.address.city()}, ${faker.address.state()}`;
    let creator = users[integer(users.length)]._id;
    let winner = users[integer(users.length)]._id;
    let description = faker.lorem.sentences();
    let spectators = users.slice(integer(users.length, "first"), integer(users.length, "last"));
    
    // Get random team IDs.
    let teamIDs = [];
    let teamMin = integer(teams.length, "first");
    let teamMax = integer(teams.length, "last");
    for (var team = teamMin; team < teamMax; team++) {
      teamIDs.push(teams[team]._id);
    }


    let notes = faker.lorem.sentence();
    let pictureURL = faker.random.image();

    let eventData = { event, location, creator, winner, description, spectators, notes, pictureURL, teams: teamIDs }
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
