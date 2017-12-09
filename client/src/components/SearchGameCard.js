import React from 'react';
import { Card } from 'semantic-ui-react';

const SearchGameCard = (props) => {
  return ( 
    <Card.Group>
      <Card fluid color='red' header='Option 1' />
      <Card fluid color='orange' header='Option 2' />
      <Card fluid color='yellow' header='Option 3' />
    </Card.Group>
  );
}

export default SearchGameCard;