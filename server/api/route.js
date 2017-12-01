var router = require('express').Router();
var User = require('./models/User.js');
var Event = require('./models/Event.js');

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

router.post('/event', (req, res) => {
  console.log('event req', req.body)
  var players = req.body.players;
  var name = req.body.name;
  var description = req.body.description;
  var notes = req.body.notes;
  Event.createEvent(name, description, notes)
  res.end()
})

module.exports = router;
