var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema({
  game: {__TWITCH API STUFF__},
});

var Game = mongoose.model('events', userSchema);
module.exports = Game;
