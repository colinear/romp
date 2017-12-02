const router = require('express').Router();
const helpers = require('./helpers.js');

router.post('/signup', (req, res) => {
  console.log(req.body);
  helpers.createUser(req.body, (err, user) => {
    console.log('Create user callback return: ', err, user);
    if (err) res.status(400).send({err});
    req.session.userId = user._id;
    res.end();
  });
});

router.post('/login', (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  helpers.loginUser(username, password)
    .then((user) => {
      if (user) {
        req.session.userId = user._id;
        res.json(user);
      }
      res.end();
    })
    .catch((err) => {
      res.status(401).send({ err });
    });
});

router.get('/logout', (req, res) => {
  delete req.session.user_id;
  res.send('success')
});

router.get('/users', (req, res) => {
  helpers.getAllUsers()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(401).send({ err });
    });
});

router.get('/users/:username', (req, res) => {
  helpers.getUser(req.params.username)
    .then(user => {
      res.end(JSON.stringify(user));
    })
    .catch(err => {
      res.status(401).send({ err });
    });
});

router.post('/createEvent', (req, res) => {
  helpers.createEvent(req.body, (err, message) => {
    if (err) res.status(400).send({err});
    res.end(message);
  });
});

router.post('/events', (req, res) => {
  helpers.searchEvents(req.body.name, req.body.game, (err, events) => {
    if (err) {
      res.status(400).send({err});
    };
    res.end(String(events));
  });
});

router.post('/joinEvent', (req, res) => {
  
});

module.exports = router;
