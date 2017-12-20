import React from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router';

const SearchUserCard = ({ user }) => {
  return (
    <Card as={Link} to={`/user/${user.username}`} fluid color="red" header="Option 1">
      <Grid style={styles.card}>
        <Grid.Row>
          <Grid.Column width={3}>
            <Image src={user.profilePicURL} size="medium" />
          </Grid.Column>
          <Grid.Column>
            <h2>{user.username}</h2>
            <Card.Description>
              <Icon name="user" />
              {user.friends.length} Friends
            </Card.Description>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Card>
  );
};

const styles = {
  card: {
    'margin-left': '30px'
  }
};

export default SearchUserCard;
