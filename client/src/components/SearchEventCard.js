import React from 'react';
import { Card } from 'semantic-ui-react';

const SearchEventCard = ({ event }) => {
  return ( 
    <Card.Group>
      <Card fluid color='red' header={event.event} />
    </Card.Group>
  );
}

export default SearchEventCard;