var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
  game: {type: Schema.Types.ObjectId, ref: 'games', index: {unique: true}},
  players: {type: Schema.Types.ObjectId, ref: 'users', required: true},
});

var Team = mongoose.model('events', userSchema);
module.exports = Team;
