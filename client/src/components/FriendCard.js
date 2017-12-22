import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Segment, List, Image, Menu, Dropdown, Button } from 'semantic-ui-react';
import { removeFriend } from '../actions/index.js';
// import '../styles/GameCard.css';

// const ROOT_URL = process.env.HOST //|| `http://localhost:3001`;
const ROOT_URL = 'http://colinear.herokuapp.com';


class FriendCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  removeThisFriend = () => {
    let userID = this.props.friend._id;
    let curUserID = this.props.user._id;
    this.props.removeFriend({ userID, curUserID }, () => {
      console.log(this.props.friend.username, 'removed from friends list.');
      this.setState({count: this.state.count + 1})
    })
    this.forceUpdate()
  }

  render() {
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
        <Button icon="delete" circular="true" size="mini" style={{marginLeft:"1em", float: "rigth"}} onClick={() => this.removeThisFriend()}/>
      </List>
    );
  }
};


function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { removeFriend })(FriendCard);
