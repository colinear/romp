import React from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Segment, List, Image, Menu, Dropdown, Button } from 'semantic-ui-react';
import { removeFriend } from '../actions/index.js';
// import '../styles/GameCard.css';

const ROOT_URL = 'http://localhost:3001';

// const removeFriend = () => {
//   let userID = this.state.user._id;
//   let curUserID = this.props.user._id;
//   this.props.addFriend({ userID, curUserID }, () => {
//     console.log(this.state.user.username, 'added to your friends list!');
//     // this.displayFriends();
//   })
// }

const FriendCard = props => {
  console.log('FriendCard', props);
  let cover = props.friend.profilePicURL;
  console.log('PROPS', props)
  return (
    <List>
      <List.Item
        onClick={() => {
          browserHistory.push(`/user/${props.friend.username}`)
          browserHistory.go(`/user/${props.friend.username}`)
        }}
      >
        {/* <Link to={`/users/${props.friend._id}`}> */}
          <Image avatar src={cover} />
          <List.Content>
            <List.Header as='a' style={{width: "100%"}}>{props.friend.username}</List.Header>
          </List.Content>
        {/* </Link> */}
      </List.Item>
      <Button icon="delete" circular="true" size="mini" style={{marginLeft:"1em", float: "rigth"}} onClick={() => props.removeFriend(props.user._id)}/>
    </List>
  );
};


function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { removeFriend })(FriendCard);
