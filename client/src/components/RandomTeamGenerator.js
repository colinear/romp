import React from 'react';
import axios from 'axios';
import faker from 'faker';

const ROOT_URL = 'http://localhost:3001'; // Server URL

let integer = (length) => {
  return Math.floor(Math.random() * length);
}

class RandomEventGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    }
  }

  randomizeEvent = async () => {
    let users = (await axios.get(`${ROOT_URL}/users`)).data;
    
    this.setState({users});
  }

  render() {
    return <button onClick={this.randomizeEvent}>Randomize Event</button>
  }
}

export default RandomEventGenerator;