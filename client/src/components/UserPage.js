import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions/index.js';
import { Grid, Image, Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router';

import axios from 'axios';
const ROOT_URL = 'http://localhost:3001'; // Server URL

const fillerImage = 'http://www.fillmurray.com/300/200';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      friends: [],
    };
  }

  addThisFriend = () => {
    let userID = this.state.user._id;
    let curUserID = this.props.user._id;
    this.props.addFriend({ userID, curUserID }, () => {
      console.log(this.state.user.username, 'added to your friends list!');
    })
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    let user = (await axios.get(`${ROOT_URL}/users/${this.props.routeParams.username}`)).data;
    this.setState({ user });
  };

  render() {
    if (this.state.user) {
      let { user } = this.state;
      return (
        <Segment>
          <Grid>
            <Grid.Row>
              <Grid.Column width={3}><div><h2>{user.username}</h2></div><div><img width="200" height="200" src={user.profilePicURL} /></div></Grid.Column>
              <Grid.Column width={13}>{`${user.firstName} ${user.lastName}`}</Grid.Column>
              <Grid.Column width={1}>
                <Button onClick={this.addThisFriend}>Add Friend</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      );
    } else {
      return <Segment>Loading...</Segment>;
    }
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { addFriend })(UserPage);
