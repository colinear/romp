import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { getGames } from '../actions/index';
import { IGDB_KEY } from '../config.js'

import EventCarousel from './EventCarousel';
import GameGrid from './GameGrid';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    // TODO: use getEvents function to populate events
    this.state = {
      events: [],
      games: []
    };
  }

  // Make action call to the server api for games
  componentWillMount() {
    this.props.getGames(this.props.routeParams.gameid);
  }

  render() {

    if (this.props.games) {
      return (
        <div>
          <EventCarousel />
          <br/>
          <GameGrid
            games={this.props.games}
          />
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

function mapStateToProps({ games }) {
  return { games };
}

export default connect(mapStateToProps, { getGames })(HomePage);
