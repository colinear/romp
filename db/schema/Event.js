var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  game: {type: Schema.Types.ObjectId, ref: 'games', index: {unique: true}},
  teams: {type: Schema.Types.ObjectId, ref: 'teams', required: true},
  location: {type: String, required: true},
  players: {type: Schema.Types.ObjectId, ref: 'users', required: true},
  winner: {type: Schema.Types.ObjectId, ref: 'users', required: true},
  timestamps: {
    createdAt: 'created_at',
    eventTime: 'NOT SURE WHAT GOES HERE'
  },
  name: {type: String, required: true},
  description: String,
  notes: String,
  chat: {myJsonProperty: Object},
  spectators: {type: Schema.Types.ObjectId, ref: 'users'},
  liveStream: [],
});

var Event = mongoose.model('events', userSchema);
module.exports = Event;
