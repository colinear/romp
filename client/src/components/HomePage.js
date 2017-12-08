import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { getGames } from '../actions/index.js';

import Carousel from './Carousel.js';
import GameGrid from './GameGrid';

import axios from 'axios';
const IGDB_API = 'https://api-2445582011268.apicast.io'; // Server URL

const fillerImage = 'http://www.fillmurray.com/300/200';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    // TODO: use getEvents function to populate events
    this.state = {
      events: [
        {
          "_id": { "$oid": "5a22e842734d1d5aaf0e29da" },
          "game": "5a22e51b734d1d5aaf0e2975",
          "teams": [
            "5a22e6b3734d1d5aaf0e29ad",
            "5a22e6f8734d1d5aaf0e29af"
          ],
          "location": "Austin",
          "creator": "5a22e5c8e083650dd34c144e",
          "winner": "5a22e6b3734d1d5aaf0e29ad",
          "name": "Austin Magic Game",
          "description": "We are fun",
          "notes": "Get ready to get beat",
          "spectators": [
            "5a22e5eee083650dd34c1450"
          ],
          "pictureURL": "https://i.imgur.com/O0BvsKO.jpg"
        },
        {
          "_id": { "$oid": "5a22e842734d1d5aaf0e29sr" },
          "game": "5a22e51b734d1d5aaf0e2975",
          "teams": [
            "5a22e6b3734d1d5aaf0e29ad",
            "5a22e6f8734d1d5aaf0e29af"
          ],
          "location": "Austin",
          "creator": "5a22e5c8e083650dd34c144e",
          "winner": "5a22e6b3734d1d5aaf0e29ad",
          "name": "Austin Poker Game",
          "description": "Kinda shitty",
          "notes": "Probably dont show up",
          "spectators": [
            "5a22e5eee083650dd34c1450"
          ],
          "pictureURL": "https://i.imgur.com/O0BvsKO.jpg"
        },
        {
          "_id": { "$oid": "5a22e842734d1d5aaf0e29pq" },
          "game": "5a22e51b734d1d5aaf0e2975",
          "teams": [
            "5a22e6b3734d1d5aaf0e29ad",
            "5a22e6f8734d1d5aaf0e29af"
          ],
          "location": "Austin",
          "creator": "5a22e5c8e083650dd34c144e",
          "winner": "5a22e6b3734d1d5aaf0e29ad",
          "name": "Austin Pokemon Game",
          "description": "Kinda cool",
          "notes": "Come Join!",
          "spectators": [
            "5a22e5eee083650dd34c1450"
          ],
          "pictureURL": "https://i.imgur.com/O0BvsKO.jpg"
        },
      ],
      games: [], };
  }
  
  getGames = async () => {
    // TODO: need to add identifying info to end of get request ..DONE? need count (as ${ variable })
    // TODO: need to add headers
    let data = await axios.get(`${IGDB_API}/games/?fields=name,popularity&order=popularity:desc`);
    let games = data.data;
    this.setState({ games });
  };

  // Make action call to the server api for games
  componentWillMount() {
    this.props.getGames(this.props.routeParams.gameid);
  }
  componentDidMount() {
    this.props.getGames(this.props.routeParams.gameid);
  }

  // TODO: handleEventCardClick

  render() {
    if (this.props.games) {
      // Pull properties off games.
      let { 
        id, name, slug, url, summary,
        popularity, total_rating, developers, 
        category, keywords, genres, first_release_date, 
        screenshots, videos, cover, esrb, websites,
        tags, 
      } = this.props.games.data;

      return (
        <div>
          <Carousel 
            events={this.state.events}
            // handleEventSlideClick={handleEventSlideClick}
          />
          <br/>
          <GameGrid 
            games={this.state.games}
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

