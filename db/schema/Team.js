var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
  events: [{type: Schema.Types.ObjectId, ref: 'events'}],
  games: [{type: Schema.Types.ObjectId, ref: 'games'}],
  name: {type: String, required: true},
  players: [{type: Schema.Types.ObjectId, ref: 'users'}],
});

var TeamSchema = mongoose.model('teams', teamSchema);
module.exports = TeamSchema;
