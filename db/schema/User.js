var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {type: String, required: true, index: {unique: true}},
  password: {type: String, required: true},
  email: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  friends: Object,
  event: Object,
  team: Object,
  favorites: Object,
  profilePicURL: String,
});

var User = mongoose.model('users', userSchema);
module.exports = User;
