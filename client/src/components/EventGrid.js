import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import EventCard from './EventCard.js';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';

const EventGrid = props => {
  console.log('event grid', props);
  return (
    <div className="ui link cards" style={{justifyContent: 'center', marginTop: "1%"}}>
      {props.events.map((event, index) => {
        return (
          <EventCard
            key={event.id}
            index={index}
            event={event}
            onClick={() => {
              browserHistory.push(`/events/${event.id}`);
            }}
          />
        );
      })}
    </div>
  );
};

function mapStateToProps({ events }) {
  return { events };
}

export default connect(mapStateToProps)(EventGrid);
