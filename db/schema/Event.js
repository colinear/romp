var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  game: {type: String, ref: 'games'},
  teams: [{type: Schema.Types.ObjectId, ref: 'teams'}],
  image: String,
  location: {type: String, required: true, lowercase: true},
  creator: {type: Schema.Types.ObjectId, ref: 'users'},
  winner: {type: Schema.Types.ObjectId, ref: 'teams'},
  event: {type: String, required: true},
  description: String,
  notes: String,
  createdAt: String,
  eventAt: String,
  chat: {myJsonProperty: Object},
  spectators: [{type: Schema.Types.ObjectId, ref: 'users'}],
  liveStream: [],
  pictureURL: String,
  participants: [], // using this temporarily (pre-team implementation)
});

var Event = mongoose.model('events', eventSchema);
module.exports = Event;


// on JOIN EVENT click:
  
  // Current Functionality:
  // add user to event
  // add event to user

  // TODO:
  // add user to team
  // add team to event
  // add event to user