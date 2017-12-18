import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Segment, List, Image, Menu, Dropdown, Button } from 'semantic-ui-react';
// import '../styles/GameCard.css';

const ROOT_URL = 'http://localhost:3001';

const FriendCard = props => {
  console.log('FriendCard', props);
  let cover = props.friend.profilePicURL;
  return (
    <List>
      <List.Item
        onClick={() => {
          browserHistory.push(`/users/${props.friend._id}`)
          browserHistory.go(`/users/${props.friend._id}`)
        }}
      >
        {/* <Link to={`/users/${props.friend._id}`}> */}
          <Image avatar src={cover} />
          <List.Content>
            <List.Header as='a' style={{width: "100%"}}>{props.friend.username}<Button icon="delete" circular="true" size="mini" style={{marginLeft:"1em"}}/></List.Header>
          </List.Content>
        {/* </Link> */}
      </List.Item>
    </List>
  );
};

export default FriendCard;

<Dropdown item text='Language'>
  <Dropdown.Menu>
    <Dropdown.Item>English</Dropdown.Item>
    <Dropdown.Item>Russian</Dropdown.Item>
    <Dropdown.Item>Spanish</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
