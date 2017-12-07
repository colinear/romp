import React from 'react';


const GameCard = props => {
  return (
    <div className="card">
      <div className="image">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Magic_the_gathering-card_back.jpg/200px-Magic_the_gathering-card_back.jpg" />
      </div>
      <div className="content">
        <div className="header">Magic: The Gathering</div>
        <div className="meta">
          <a>Card Game</a>
        </div>
        <div className="description">
          First published in 1993 by Wizards of the Coast, Magic was the first trading card game produced and it continues to thrive, with approximately twenty million players as of 2015.
        </div>
      </div>
      <div className="extra content">
        <span className="right floated">
          {/* can add small info here */}
        </span>
        <span>
          <i className="user icon"></i>
          718648 Players
        </span>
      </div>
    </div>
  );
};

export default GameCard;
