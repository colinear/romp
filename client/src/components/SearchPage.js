import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Button from './Button.js';
import Counter from './Counter.js';

class SearchPage extends React.Component {
  render() {
    return (
      <Segment>
        <Counter />
        <Button />
        <Link to="/">
          <button>Home</button>
        </Link>
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SearchPage);
