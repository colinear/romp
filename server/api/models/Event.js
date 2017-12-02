var Event = require('../../../db/schema/Event.js');

Event.createEvent = (teams, location, user_id, name, description, notes) => {
  //create new event
  var newEvent = new Event ();
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

Event.getAllEvents = () => {
  return Event.find({}).exec((err, events) => {
    if (err) {throw err}
    return events;
  });
};

Event.searchEvent = (name, game, description) => {

}

module.exports = Event;
