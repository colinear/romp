const router = require('express').Router();
const helpers = require('./helpers.js');
const passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });
// const requireTwitchLogin = passport.authenticate('twitch', { failureRedirect: '/' })


router.post('/signup', helpers.createUser);

router.post('/login', requireLogin, helpers.loginUser);

// router.get('/auth/twitch', passport.authenticate('twitch'));
// router.get('/auth/twitch/callback', requireTwitchLogin, function(req, res) {
//     // Successful authentication, redirect home.
//     res.end();
// });
// router.get('/', (req, res) => {
//   res.render('index');
// })

router.get('/logout', (req, res) => {
  console.log('req: ', req)
  res.end()
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
