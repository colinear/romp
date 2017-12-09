import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import GameCard from './GameCard.js';
import { Link, browserHistory } from 'react-router';

const GameGrid = props => {
  return (
    <div className="ui link cards">
      {props.games.map((game, index) => {
        return (
          <GameCard
            key={game.id}
            index={index}
            game={game}
            onClick={() => {
              browserHistory.push(`/games/${game.id}`);
            }}
          />
        );
      })}
    </div>
  );
};

export default GameGrid;
