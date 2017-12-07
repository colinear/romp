import React from 'react';
import { connect } from 'react-redux';
import faker from 'faker';

import { signupUser } from '../actions/index';

class RandomUserGenerator extends React.Component {

  randomizeUser = () => {
    let username = faker.internet.userName();
    let email = faker.internet.email();
    let password = 'qwertyuiop';
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let profilePicURL = faker.random.imageUrl();
    let userData = { username, email, password, firstName, lastName, profilePicURL }
    console.log(userData);
    this.props.signupUser(userData);
  }

  render() {
    return <button onClick={this.randomizeUser}>Generate Random User</button>
  }
}

export default connect(null, {signupUser})(RandomUserGenerator);