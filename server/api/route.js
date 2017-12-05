const router = require('express').Router();
const helpers = require('./helpers.js');
const passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

router.post('/signup', (req, res) => {
  helpers.createUser(req.body, (err, user, message) => {
    if (err) res.end(message);
    else {
      req.session.userId = user._id;
      res.json({ token: helpers.tokenForUser(user) });;
    }
  });
});

router.post('/login', (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  helpers
    .loginUser(username, password)
    .then(user => {
      if (user) {
        console.log('USER IN LOGIN: ', user);
        // req.session.userId = user._id;
        res.send({ token: helpers.tokenForUser(user) });
      }
    })
    .catch(err => {
      res.status(401).send({ err });
    });
});

router.get('/logout', (req, res) => {
  delete req.session.user_id;
  res.send('success');
});

router.get('/users', (req, res) => {
  helpers
    .getAllUsers()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(401).send({ err });
    });
});

router.get('/users/:username', (req, res) => {
  helpers
    .getUser(req.params.username)
    .then(user => {
      console.log('USER IN ROUTE', user);
      res.end(JSON.stringify(user));
    })
    .catch(err => {
      res.status(401).send({ err });
    });
});

router.post('/createEvent', (req, res) => {
  helpers.createEvent(req.body, (err, message) => {
    if (err) res.status(400).send({ err });
    res.end(message);
  });
});

router.post('/events', (req, res) => {
  helpers.searchEvents(req.body.name, req.body.game, (err, events) => {
    if (err) {
      res.status(400).send({ err });
    }
    res.end(String(events));
  });
});

router.post('/joinEvent', (req, res) => {
  helpers.joinEvent(req.body.username, req.body.event, (err, message) => {
    if (err) res.status(400).send({ err });
    console.log(message);
    res.end(message);
  });
});

module.exports = router;
