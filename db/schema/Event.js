var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  game: {type: String, ref: 'games'},
  teams: [{type: Schema.Types.ObjectId, ref: 'teams'}],
  image: String,
  location: {type: String, required: true, lowercase: true},
  creator: {type: Schema.Types.ObjectId, ref: 'users'},
  winner: {type: Schema.Types.ObjectId, ref: 'teams'},
  // timestamps: {createdAt: 'created_at'},
  event: {type: String, required: true, lowercase: true},
  description: String,
  notes: String,
  chat: {myJsonProperty: Object},
  spectators: [{type: Schema.Types.ObjectId, ref: 'users'}],
  liveStream: [],
  pictureURL: String,
  participants: [], // using this temporarily (pre-team implementation)
});

// var eventSchema = new Schema({
//   game: {type: Schema.Types.ObjectId, ref: 'games'},
//   teams: [{type: Schema.Types.ObjectId, ref: 'teams'}],
//   location: {type: String, required: true},
//   creator: {type: Schema.Types.ObjectId, ref: 'users'},
//   winner: {type: Schema.Types.ObjectId, ref: 'teams'},
//   // timestamps: {createdAt: 'created_at'},
//   name: {type: String, required: true},
//   description: String,
//   notes: String,
//   chat: {myJsonProperty: Object},
//   spectators: [{type: Schema.Types.ObjectId, ref: 'users'}],
//   liveStream: [],
// });



var Event = mongoose.model('events', eventSchema);
module.exports = Event;


// on JOIN EVENT click,
  // add user to team
  // add team to event
  // add event to user

  // add user to spectator,
  // add event to user