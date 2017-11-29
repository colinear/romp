var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  username: {type: String, required: true, index: {unique: true}},
  password: {type: String, required: true},
  wishlists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }],
  email: {type: String, required: false},
  firstName: {type: String, required: false},
  lastName: {type: String, required: false},
  friends: {type: Object, required: false},
  profilePicURL: {type: String, required: false},
})

// user method for generating a hashed password
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// user method to check if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

var User = mongoose.model('User', userSchema);
module.exports = User;
