var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {type: String, unique: true, lowercase: true, required: true, minlength: 4},
  password: {type: String, required: true, minlength: 7},
  email: {type: String, required: true, minlength: 7},
  firstName: {type: String, minlength: 2},
  lastName: {type: String, minlength: 2},
  friends: [],
  event: [{ type: Schema.Types.ObjectId, ref: 'events' }],
  team: [{ type: Schema.Types.ObjectId, ref: 'teams' }],
  favorites: [{ type: Schema.Types.ObjectId, ref: 'games' }],
  profilePicURL: String,
  description: String
});

userSchema.pre('save', function(next) {
  const user = this;
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err) }

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err) }
      user.password = hash;
      next();
    })
  })
});

// user method to check if password is valid
userSchema.methods.validPassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    // this.password is the salt+hashedPassword
    if (err) { return callback(err) }
    callback(null, isMatch);
  })
}

// creates a model class
var User = mongoose.model('users', userSchema);

module.exports = User;
