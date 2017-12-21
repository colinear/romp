import React from 'react';
import { browserHistory } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';
import { Segment } from 'semantic-ui-react';
import '../styles/GameCard.css';

import Parallax from './Parallax';

const GameCard = props => {
  console.log('game in GameCard', props.game)
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

  let starRating = Math.round(rating / 14);

  let cover = props.game.cover.url.substring(0, 35) + props.game.cover.url.substring(43);
  let url = props.game.cover.url;
  cover = url.replace(/t_thumb/, 't_1080p');

  return (
    <div
      className="card"
      onClick={() => {
        browserHistory.push(`/games/${props.game.id}`);
      }}
    >
      {/* <div className="GameCard-image" style={{ backgroundImage: `url("${cover}")` }} /> */}
      <Parallax.Mouse background={cover} />
      <div className="content">
        <div className="header">{props.game.name}</div>
        <div className="meta">
          <a>{}</a>
        </div>
        <div className="description">{description}</div>
      </div>
      <div className="extra content">
        <span className="right floated">
          <StarRatingComponent
            name="star-rating" 
            value={starRating}
            starCount={7} /* number of icons in rating, default `5` */
          />
        </span>
        <span>
          <i className="user icon" />
          {0 /* add payers who favorited */} Players
        </span>
      </div>
    </div>
  );
};

export default GameCard;
