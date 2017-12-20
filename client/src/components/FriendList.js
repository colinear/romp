import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Segment, List, Image, Menu, Dropdown, Button } from 'semantic-ui-react';
import { removeFriend, getFriends } from '../actions/index.js';
// import '../styles/GameCard.css';
// import axios from 'axios';
const ROOT_URL = 'http://localhost:3001';


class FriendList extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);
    this.state = {
      user: null,
      friend: props.friend,
    }
  }

  removeThisFriend = () => {
    let userID = this.props.friend._id;
    let curUserID = this.props.user._id;
    let curUser = this.props.user
    this.props.removeFriend({ userID, curUserID }, () => {
      this.props.getFriends(curUser, () => {
        this.forceUpdate();
      })
    })
  }

  render() {
    let cover = this.props.friend.profilePicURL;
    let loggedUser = this.props.user;
    let user = this.state.friend;
    console.log('USERS', this.props);
    return (
      <List>
        <List.Item
          onClick={() => {
            browserHistory.push(`/user/${this.props.friend.username}`)
            browserHistory.go(`/user/${this.props.friend.username}`)
          }}
        >
          {/* <Link to={`/users/${props.friend._id}`}> */}
            <Image avatar src={cover} />
            <List.Content>
              <List.Header as='a' style={{width: "100%"}}>{this.props.friend.username}</List.Header>
            </List.Content>
          {/* </Link> */}
        </List.Item>
        {loggedUser._id === user._id ? <Button icon="delete" circular="true" size="mini" style={{marginLeft:"1em", float: "rigth"}} onClick={this.removeThisFriend}/> : null}
      </List>
    );
  }
};


function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { removeFriend, getFriends })(FriendList);
