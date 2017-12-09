import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router';

const SearchUserCard = ({ user }) => {
  return (
    <Link to={`/user/${user.username}`}>
      <Card>
        <Image src={user.profilePicURL} />
        <Card.Content>
          <Card.Header>{user.username}</Card.Header>
          <Card.Meta>User since May, 2017.</Card.Meta>
          <Card.Description>1337 Gamer living in San Francisco, CA. Willing to hang out with anybody.</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            10 Friends
          </a>
        </Card.Content>
      </Card>
    </Link>
  );
};

export default SearchUserCard;
