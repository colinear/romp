var router = require('express').Router();
var User = require('./models/User.js');
var Event = require('./models/Event.js');

router.post('/signup', (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var profilePicURL = req.body.profilePicURL;

  User.createUser(username, password, email, firstName, lastName, profilePicURL)
    .then(user => {
      console.log('user in route', user);
      req.session.userId = user._id;
      console.log('req.session: ', req.session);
      res.end();
    })
    .catch(err => {
      console.log('error!! in route');
      res.status(401).send({ err });
    });
});

router.get('/users', (req, res) => {
  User.getAllUsers()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(401).send({ err });
    });
});

router.get('/users/:username', (req, res) => {
  User.getUser(req.params.username)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(401).send({ err });
    });
});

router.post('/createEvent', (req, res) => {
  Event.createEvent(req.body, (err, message) => {
    if (err) throw err;
    res.end(message);
  });
});

router.post('/events', (req, res) => {
  Event.searchEvents(req.body.name, req.body.game, (err, events) => {
    if (err) {
      res.status(400).send({err});
    };
    res.end(String(events));
  });
});

module.exports = router;
