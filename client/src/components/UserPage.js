import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions/index.js';
import FriendCard from './FriendCard';
import { Grid, Image, Segment, Button, Card } from 'semantic-ui-react';
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
      // this.displayFriends();
    })
  }

  displayFriends = () => {
    let friends = this.state.user.friends;
    return friends.map((user, index) => {
      // let friend = user;
      // let profilePic = user.profilePicURL;
      return (

        <FriendCard
          key={user.id}
          index={index}
          friend={user}
        />
      )
      //   <span style={{ margin: '2px' }}>
      //     <Link to={`${ROOT_URL}/user/${user._id}`}>
      //       <img width="100" height="100" src={profilePic} />
      //     </Link>
      //     <p>{friend.username}</p>
      //   </span>
      // );
    });
  };

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
            <Grid.Row>
              <Grid.Column width={16}>
                <h2>Friends</h2>
                {this.displayFriends()}
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
