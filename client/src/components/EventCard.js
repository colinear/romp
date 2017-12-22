import React from 'react';
import { Link, browserHistory } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';
import { Segment } from 'semantic-ui-react';
import moment from 'moment';

const EventCard = props => {
  let cover = props.event.pictureURL;
  console.log('event card', props);
  return (
    <div
      className="card"
      onClick={() => {
        browserHistory.push(`/event/${props.event._id}`);
      }}
    >
      <div className="GameCard-image" style={{ backgroundImage: `url("${cover}")` }} />
      <div className="content">
        <div className="header">{props.event.event}</div>
        <div className="meta">
          <a>{}</a>
        </div>
        <div className="description" style={{fontWeight: "bold"}}>{props.event.description}</div>
        <div style={{fontStyle: "italic"}}>{moment(props.event.eventAt, 'MMMM Do YYYY, h:mm a').fromNow()}</div>
      </div>
    </div>
  );
};

export default EventCard;
