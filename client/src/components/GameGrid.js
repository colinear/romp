import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import GameCard from './GameCard.js';


const GameGrid = props => {
  return (
    <div className="ui link cards">
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
  );
};

export default GameGrid;

