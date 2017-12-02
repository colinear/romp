var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema({
  name: {type: String, required: true}
});

var Game = mongoose.model('games', gameSchema);
module.exports = Game;
