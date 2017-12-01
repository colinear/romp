import React from 'react';

import Carousel from './Carousel.js';
import { Segment } from 'semantic-ui-react';

class HomePage extends React.Component {
  render() {
    return (
      <Segment>
      <Carousel />
      </Segment>
    );
  }
}

export default HomePage;
