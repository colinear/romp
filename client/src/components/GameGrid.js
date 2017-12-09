import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import GameCard from './GameCard.js';
import { Link } from 'react-router';


const GameGrid = props => {
  return (
    <div className="ui link cards">
      {props.games.map((game, index) => {
        return (
        <Link to={`/games/${game.id}`}>
        <GameCard
          key={game.id}
          index={index}
          game={game}
          // onClick={() => handleEventSlideClick(event)}
        />
      </Link>
    )
    })}
  </div>
  )
};

export default GameGrid;
