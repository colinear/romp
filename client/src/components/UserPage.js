import React from 'react';
import { connect } from 'react-redux';
import FriendList from './FriendList';
import { addFriend, getFriends } from '../actions/index.js';
import { Grid, Image, Segment, Button, Card, Icon } from 'semantic-ui-react';
import { getEvent, toggleProfileSettingsModal, addFriend, getFriends } from '../actions/index.js';
import { Link, browserHistory } from 'react-router';

// import ProfileSettingsModal from './ProfileSettingsModal';
import '../styles/UserPage.css';

import axios from 'axios';
const ROOT_URL = 'http://localhost:3001'; // Server URL

const fillerImage = 'http://www.fillmurray.com/300/200';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      friends: [],
      isAdmin: false
    };
  }

  addThisFriend = () => {
    let userID = this.state.user._id;
    let curUserID = this.props.user._id;
    let curUser = this.props.user;
    this.props.addFriend({ userID, curUserID }, () => {
      this.props.getFriends(curUser, () => {
        console.log(this.state.user.username, 'added to your friends list!');
      })
    })
  }

  displayFriends = () => {
    let friends = this.props.friends.data.friends;
    return friends.map((user, index) => {
      // let friend = user;
      // let profilePic = user.profilePicURL;
      return (

        <FriendList
          key={user.id}
          index={index}
          friend={user}
        />
      )
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
    console.log('Current user selected: ', this.state.user)
    if (this.state.user) {
      let { user } = this.state;
      let curUserID = this.props.user._id;
      let profileId = this.props.routeParams.username;
      let userId = this.props.user._id;
      console.log(user);
      return (
        <div>
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
                {curUserID === user._id ? this.displayFriends() : null}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <div className="UserPage-container">
          <div className="UserPage-user-blurb">
            <div className="UserPage-profile-picture">
              <img src={user.profilePicURL} />
            </div>
            <div className="UserPage-user-info">
              <div className="UserPage-user-name">
                <h2>Username (full name)</h2>
              </div>
              <div className="UserPage-user-description">
              {(user.description !== '') ? <span><h5>“</h5><p>User description goes here.</p><h5>”</h5></span> : <p>No description available.</p>}
              </div>
              <div className="UserPage-edit-description">
                <Icon name='edit' /><p style={{display: 'inline-block'}}>Edit description</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      );
    } else {
      return <Segment>Loading...</Segment>;
    }
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getEvent, toggleProfileSettingsModal, addFriend, getFriends })(UserPage);
