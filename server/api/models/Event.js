var Event = require('../../../db/schema/Event.js');
var Game = require('../../../db/schema/Game.js');

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

Event.searchEvents = async (name, game, callback) => {
  if (name) {
    let err, events = await Event.find({name});
    callback(err, events);
  } else if (game) {
    var err, game = await Game.find({name: game}, '_id');
    if (err) callback(err);
    var err, events = await Event.find({game});
    callback(err, events);
  } else if (!name && !game) {
    var err, events = await Event.find({});
    callback(err, events);
  }
};

module.exports = Event;
