var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {type: String, unique: true, lowercase: true, required: true, minlength: 4},
  password: {type: String, required: true, minlength: 7},
  email: {type: String, required: true, minlength: 7},
  firstName: {type: String, minlength: 2},
  lastName: {type: String, minlength: 2},
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

// creates a model class
var User = mongoose.model('users', userSchema);

// console.log('User schema: ', userSchema)
module.exports = User;
