import React from 'react';

// TODO: update card with new api data

const GameCard = props => {
  // console.log('props in gamecard', props.game)
  return (
    <div className="card">
      <div className="image">
        <img src={props.game.cover.url} />
      </div>
      <div className="content">
        <div className="header">{props.game.name}</div>
        <div className="meta">
          <a>{}</a>
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
          {} Players
        </span>
      </div>
    </div>
  );
};

export default GameCard;

// igdb api