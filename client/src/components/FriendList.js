import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Segment, List, Image, Menu, Dropdown, Button } from 'semantic-ui-react';
import { removeFriend, getFriends } from '../actions/index.js';
// import '../styles/GameCard.css';

const ROOT_URL = 'http://localhost:3001';


class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  removeThisFriend = () => {
    console.log('WHAT THE FUCK');
    let userID = this.props.friend._id;
    let curUserID = this.props.user._id;
    let curUser = this.props.user
    this.props.removeFriend({ userID, curUserID, curUser }, () => {
      this.props.getFriends(curUser, () => {
        this.forceUpdate();
        console.log('user', curUser);
      })
      // this.setState({friends: this.state.intFriends.slice(userID)})
    })
  }

  render() {
    console.log('AHHHH', this.props, this.state);
    let cover = this.props.friend.profilePicURL;
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
        <Button icon="delete" circular="true" size="mini" style={{marginLeft:"1em", float: "rigth"}} onClick={this.removeThisFriend}/>
      </List>
    );
  }
};


function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { removeFriend, getFriends })(FriendList);
