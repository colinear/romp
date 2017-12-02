var Event = require('../../../db/schema/Event.js');
var Game = require('../../db/schema/Game.js');

Event.createEvent = (eventData, callback) => {
  //create new event
  var newEvent = new Event (eventData);

  console.log('SERVER: NEW EVENT:', newEvent)
  //save event to db
  newEvent.save((err) => {
    callback(err, 'SERVER: Event added.')
  });
};

Event.getAllEvents = () => {
  return Event.find({}).exec((err, events) => {
    if (err) {throw err}
    return events;
  });
};

Event.searchEvent = (name, game, callback) => {
  if (name) {
    Event.find({name: name}).exec((err, events) => {
      console.log(events);
      callback(err, events);

    });
  } else if (game) {
    Event.find({game: game}).exec((err, events) => {
      callback(err, events);
    });
  }
}

module.exports = Event;
