import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import EventCard from './EventCard.js';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import moment from 'moment';

const EventGrid = props => {
  let time = moment().format('MMMM Do YYYY, h:mm a');
  let now = JSON.stringify(time);
  return (
    <div>
      <h2 style={{textAlign: "center", marginTop: "1%"}}>Upcoming Events</h2>
      <div className="ui link cards" style={{justifyContent: 'center', marginTop: "1%"}}>
      {props.events.filter(event => {return now < JSON.stringify(event.eventAt)})
        .map((event, index) => {
          console.log('event', event, index);
          return (
            <EventCard
              key={event._id}
              index={index}
              event={event}
              onClick={() => {
                browserHistory.push(`/events/${event._id}`);
              }}
            />
          );
        })}
      </div>
    <h2 style={{textAlign: "center", width: "90%", position: "center", margin: "2% auto", paddingTop: "1%", borderTop: "1px solid LightGrey"}}>Past Events</h2>
    <div className="ui link cards" style={{justifyContent: 'center', marginTop: "1%"}}>
    {props.events.filter(event => {return now > JSON.stringify(event.eventAt)})
      .map((event, index) => {
        console.log('event', event, index);
        return (
          <EventCard
            key={event._id}
            index={index}
            event={event}
            onClick={() => {
              browserHistory.push(`/events/${event._id}`);
            }}
          />
        );
      })}
    </div>
  </div>
  );
};

function mapStateToProps({ events }) {
  return { events };
}

export default connect(mapStateToProps)(EventGrid);
