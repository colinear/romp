import React from 'react';

import Thing from './Thing.js';
import { Segment } from 'semantic-ui-react';

class HomePage extends React.Component {
  render() {
    return (
      <Segment>
      <Thing />
      </Segment>
    );
  }
}

export default HomePage;
