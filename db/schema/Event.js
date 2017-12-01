var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  // game: {type: Schema.Types.ObjectId, ref: 'games', index: {unique: true}},
  teams: [{type: Schema.Types.ObjectId, ref: 'teams', required: true}],
  location: {type: String, required: true},
  user_id: {type: Schema.Types.ObjectId, ref: 'users'},
  // winner: {type: Schema.Types.ObjectId, ref: 'users', required: true},
  // timestamps: {createdAt: 'created_at'},
  name: {type: String, required: true, unique: true},
  description: String,
  notes: String,
  chat: {myJsonProperty: Object},
  spectators: {type: Schema.Types.ObjectId, ref: 'users'},
  liveStream: [],
});

var EventSchema = mongoose.model('events', eventSchema);
module.exports = EventSchema;
