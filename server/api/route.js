var router = require('express').Router();
var User = require('./models/User.js');

router.post('/signup', (req, res) => {
  console.log("req: ", req.body)
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var profilePicURL = req.body.profilePicURL;

  User.createUser(username, password, email, firstName, lastName, profilePicURL)

  res.end();
});

router.get('/users', (req, res) => {
  User.getAllUsers()
    .then((users) => {
      res.json(users)
    })
    .catch((err) => {
      res.status(401).send({err})
    })
});

router.get('/users/:username', (req, res) => {
  User.getUser(req.params.username)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(401).send({err});
    })
});

module.exports = router;
