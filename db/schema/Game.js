var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema({
  name: {type: String},
});

var Game = mongoose.model('events', userSchema);
module.exports = Game;
