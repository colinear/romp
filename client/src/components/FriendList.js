import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Segment, List, Image, Menu, Dropdown, Button, Icon } from 'semantic-ui-react';
import { removeFriend, getFriends } from '../actions/index.js';
// import '../styles/GameCard.css';
const ROOT_URL = 'http://localhost:3001';


class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      curUserPage: props.curUserPage
    }
  }

  removeThisFriend = () => {
    console.log('CLICKED');
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
    let curUserPage = this.state.curUserPage;
    return (
      <List>
        <List.Item
          // onClick={() => {
          //   browserHistory.push(`/user/${this.props.friend.username}`)
          //   browserHistory.go(`/user/${this.props.friend.username}`)
          // }}
        >
          {/* <Link to={`/users/${props.friend._id}`}> */}
            <Image avatar src={cover}
              onClick={() => {
                browserHistory.push(`/user/${this.props.friend.username}`)
                browserHistory.go(`/user/${this.props.friend.username}`)
              }}
            />
            <List.Content>
              <List.Header as='a' style={{display: "inline-block"}}
                onClick={() => {
                  browserHistory.push(`/user/${this.props.friend.username}`)
                  browserHistory.go(`/user/${this.props.friend.username}`)
                }}
              >
                {this.props.friend.username}</List.Header>
              {loggedUser._id === curUserPage._id ? <Icon name="delete" color="grey" style={{marginLeft:"1em"}} onClick={this.removeThisFriend} /> : null}
            </List.Content>
          {/* </Link> */}
        </List.Item>
      </List>
    );
  }
};


function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { removeFriend, getFriends })(FriendList);
