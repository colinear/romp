import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import Carousel from './Carousel.js';
import GameGrid from './GameGrid';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
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
      games: [
        {
          "channels": 953,
          "viewers": 171708,
          "game": {
            "_id": 32399,
            "box": {
               "large": "https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-272x380.jpg",
               "medium": "https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-136x190.jpg",
               "small": "https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-52x72.jpg",
               "template": "https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-{width}x{height}.jpg"
            },
            "giantbomb_id": 36113,
            "logo": {
               "large": "https://static-cdn.jtvnw.net/ttv-logoart/Counter-Strike:%20Global%20Offensive-240x144.jpg",
               "medium": "https://static-cdn.jtvnw.net/ttv-logoart/Counter-Strike:%20Global%20Offensive-120x72.jpg",
               "small": "https://static-cdn.jtvnw.net/ttv-logoart/Counter-Strike:%20Global%20Offensive-60x36.jpg",
               "template": "https://static-cdn.jtvnw.net/ttv-logoart/Counter-Strike:%20Global%20Offensive-{width}x{height}.jpg"
            },
            "name": "Counter-Strike: Global Offensive",
            "popularity": 170487
          }
        },
      ],
    };
  }

  handleEventSlideClick = (event) => {
    // send to event page
  }

  // getEvents() {
  //   // get events from db
  // }

  render() {
    return (
      <Segment>
        <Carousel 
          events={this.state.events}
          // handleEventSlideClick={handleEventSlideClick}
        />
        <br/>
        <GameGrid />
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(HomePage);
