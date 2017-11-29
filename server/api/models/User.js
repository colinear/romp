var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var User = require('../schema/User.js');

// user method for generating a hashed password
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// user method to check if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}
