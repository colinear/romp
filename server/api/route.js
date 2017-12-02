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
    .then((user) => {
      // console.log('user in route', user)
      req.session.userId = user._id;
      // console.log('req.session: ', req.session);
      res.json(user);
    })
    .catch((err) => {
      console.log("error!! in route")
      res.status(401).send({ err });
    })

});

router.post('/login', (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  User.loginUser(username, password)
    .then((user) => {
      console.log('user in login: ', user)
      //success
      if (user) {
        req.session.userId = user._id;
        res.json(user);
      }
      // no user returned
      res.end();
    })
    .catch((err) => {
      res.status(401).send({ err });
    });

  // make sure user exsists already
  // find user
    // check that password matches
      // req.session.userId = user._id;
});

router.get('/logout', (req, res) => {
  delete req.session.user_id;
  res.send('success')
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

router.post('/events', (req, res) => {
  console.log('event req', req.body)
  var teams = req.body.teams;
  var location = req.body.location;
  var user_id = req.body.user_id;
  var name = req.body.name;
  var description = req.body.description;
  var notes = req.body.notes;
  Event.createEvent(teams, location, user_id, name, description, notes);
  res.end()
})

router.get('/events', (req, res) => {
  Event.getAllEvents()
    .then(event => {
      res.json(event);
    })
    .catch(err => {
      res.status(401).send({ err });
    });
});

module.exports = router;
