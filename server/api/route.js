const router = require('express').Router();
const helpers = require('./helpers.js');

router.post('/signup', (req, res) => {
  console.log(req.body);
  helpers.createUser(req.body, (err, user) => {
    console.log('Create user callback return: ', err, user);
    if (err) throw err;
    req.session.userId = user._id;
    res.end();
  });
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
      res.json(user);
    })
    .catch(err => {
      res.status(401).send({ err });
    });
});

router.post('/createEvent', (req, res) => {
  helpers.createEvent(req.body, (err, message) => {
    if (err) throw err;
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
  
})

module.exports = router;
