var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user.js');

module.exports = function(passport) {

  // Local Signup Strategy
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, username, password, done) {

    User.findOne({'username': username }, function(err, user) {
      if (err) {
        return done(err);
      }
      // Check to see if there is already a user with provided username
      if (user) {
        return done('username is already taken');
      } else {
        var newUser = new User();

        // Set the user's local credentials
        newUser.username = username;
        newUser.password = newUser.generateHash(password);
        // Save the user
        newUser.save(function(err) {
          if (err) {
            throw err;
          } else {
            return done(null, newUser);
          }
        });
      }
    });

  }));

  // Local Login strategy
  passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, username, password, done) {
    User.findOne({ 'username': username }, function(err, user) {
      if (err) {
        return done(err);
      }
      // If user is not found:
      if (!user) {
        return done('username not found.');
      }
      // If user is found but the provided password is incorrect:
      if (!user.validPassword(password)) {
        return done('loginMessage', 'Incorrect username/password.');
      }
      // If username and password are corret, return successfully
      return done(null, user);
    })
  }));
};
