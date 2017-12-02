var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
  // user_id: [{type: mongoose.Schema.Types.ObjectId, ref: 'users'}],
  // event_id: {type: Schema.Types.ObjectId, ref: 'events'}
  // game: {type: Schema.Types.ObjectId, ref: 'games'},
  name: {type: String, required: true},
  players: [{type: Schema.Types.ObjectId, ref: 'users'}],
});

var TeamSchema = mongoose.model('teams', teamSchema);
module.exports = TeamSchema;
