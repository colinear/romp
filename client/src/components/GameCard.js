import React from 'react';


const GameCard = props => {
  console.log('props in gamecard', props.game)
  return (
    <div className="card">
      <div className="image">
        <img src={props.game.game.box.large} />
      </div>
      <div className="content">
        <div className="header">{props.game.game.name}</div>
        <div className="meta">
          <a>{/* game type */}</a>
        </div>
        <div className="description">
          {/* game description? */}
        </div>
      </div>
      <div className="extra content">
        <span className="right floated">
          {/* can add small info here */}
        </span>
        <span>
          <i className="user icon"></i>
          {props.game.game.popularity} Players
        </span>
      </div>
    </div>
  );
};

export default GameCard;

// igdb api