import React from 'react';
import { Card, Grid, Segment } from 'semantic-ui-react';
import { Link } from 'react-router';

const SearchEventCard = ({ event }) => {
  return (
    <Link to={`/event/${event._id}`}>
      <Card fluid color="red">
        <Grid style={styles.card}>
          <Grid.Row>
            <h1>{event.event}</h1>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={5}><img src={event.pictureURL} /></Grid.Column>
            <Grid.Column width={11}>{event.description}</Grid.Column>
          </Grid.Row>
        </Grid>
      </Card>
    </Link>
  );
};

const styles = {
  card: {
    'margin-left': '30px'
  }
};

export default SearchEventCard;
