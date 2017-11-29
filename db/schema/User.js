var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
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
})

module.exports = userSchema;
