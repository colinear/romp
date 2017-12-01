var EventSchema = require('../../../db/schema/Event.js');

var Event = {};

Event.createEvent = (teams, location, user_id, name, description, notes) => {
  //create new event
  var newEvent = new EventSchema ();
  newEvent.teams = teams,
  newEvent.location = location,
  newEvent.user_id = user_id
  newEvent.name = name,
  newEvent.description = description,
  newEvent.notes = notes,

  console.log('NEW EVENT:', newEvent)
  //save event to db
  newEvent.save((err) => {
    if (err) {
      // send message to client that username is taken
      console.log('error with event', err)
    } else {
      console.log('event added')
    }
  });
};

module.exports = Event;
