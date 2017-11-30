var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {type: String, required: true, index: {unique: true}},
  password: {type: String, required: true},
  email: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  friends: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  event: [{ type: Schema.Types.ObjectId, ref: 'events' }],
  team: [{ type: Schema.Types.ObjectId, ref: 'teams' }],
  favorites: [{ type: Schema.Types.ObjectId, ref: 'games' }],
  profilePicURL: String,
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// user method to check if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

var User = mongoose.model('users', userSchema);
module.exports = User;
