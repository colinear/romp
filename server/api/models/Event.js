var Event = require('../../../db/schema/Event.js');
var Game = require('../../../db/schema/Game.js');
var User = require('../../../db/schema/User.js');

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

Event.joinEvent = async (username, event, callback) => {
  if (!username || !event) {
    callback('Server: username or event not supplied');
  }
  User.find({username: username}, '_id')

}

module.exports = Event;
