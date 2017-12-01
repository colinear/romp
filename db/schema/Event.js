var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  game: {type: Schema.Types.ObjectId, ref: 'games'},
  teams: [{type: Schema.Types.ObjectId, ref: 'teams'}],
  location: {type: String, required: true},
  user_id: {type: Schema.Types.ObjectId, ref: 'users'},
  winner: {type: Schema.Types.ObjectId, ref: 'users'},
  // timestamps: {createdAt: 'created_at'},
  name: {type: String, required: true},
  description: String,
  notes: String,
  chat: {myJsonProperty: Object},
  spectators: {type: Schema.Types.ObjectId, ref: 'users'},
  liveStream: [],
});



var EventSchema = mongoose.model('events', eventSchema);
module.exports = EventSchema;
