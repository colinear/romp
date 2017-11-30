var router = require('express').Router();
var User = require('./models/User.js');

router.get('/signup', (req, res) => {
  var user = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    profilePicURL: req.body.profilePicURL
  };

  User.createUser(user);
});
// info off of req.body (username, password, email, firstName, lastName, profilePicURL)