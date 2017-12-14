import React from 'react';
import { Link, browserHistory } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';
import { Segment } from 'semantic-ui-react';

const EventCard = props => {
  let cover = props.event.pictureURL;
  return (
    <div
      className="card"
      onClick={() => {
        browserHistory.push(`/events/${props.event.id}`);
      }}
    >
      <div className="GameCard-image" style={{ backgroundImage: `url("${cover}")` }} />
      <div className="content">
        <div className="header">{props.event.event}</div>
        <div className="meta">
          <a>{}</a>
        </div>
        <div className="description">{props.event.description}</div>
      </div>
    </div>
  );
};

export default EventCard;
