import React from 'react';

const GameCard = props => {

  let rating;
  if (props.game.total_rating) {
    rating = props.game.total_rating;
  } else if (props.game.aggregated_rating) {
    rating = props.game.aggregated_rating;
  } else if (props.game.rating) {
    rating = props.game.rating;
  }
  if (rating) {
    rating = Math.floor(rating);
  } else {
    rating = 'n/a';
  }

  let description;
  if (props.game.summary) {
    description = props.game.summary;
  } else if (props.game.aggregated_rating) {
    description = props.game.storyline;
  }
  if (description) {
    description = description.slice(0, 240) + '...';
  }

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
          {description}
        </div>
      </div>
      <div className="extra content">
        <span className="right floated">
          rating: {rating}
        </span>
        <span>
          <i className="user icon"></i>
          {0 /* add payers who favorited */} Players
        </span>
      </div>
    </div>
  );
};

export default GameCard;
