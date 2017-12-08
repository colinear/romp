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
  if (req.params.username.length === 24) {
    var username = null;
    var userID = req.params.username;
  } else {
    var username = req.params.username;
    var userID = null;
  }
  helpers
    .getUser(username, userID)
    .then(user => {
      res.end(JSON.stringify(user));
    })
    .catch(err => {
      res.status(401).send({ err });
    });
});

router.get('/team/players/:teamid', (req, res) => {
  let teamID = req.params.teamid;
  helpers.getUsersForTeam(teamID, (err, users) => {
    if (err) res.status(400).send({err});
    else res.send(users);
  });
});

router.post('/createEvent', (req, res) => {
  helpers.createEvent(req.body, (err, message) => {
    if (err) res.status(400).send({ err });
    else res.send(message);
  });
});

router.post('/events', (req, res) => {
  helpers.searchEvents(req.body.name, req.body.game, req.body.id, (err, events) => {
    if (err) {
      res.status(400).send({ err });
    }
    else res.end(JSON.stringify(events));
  });
});

router.post('/joinEvent', (req, res) => {
  helpers.joinEvent(req.body.username, req.body.event, (err, message) => {
    if (err) res.status(400).send({ err });
    res.end(message);
  });
});

router.get('/event/:eventid', (req, res) => {
  let eventID = req.params.eventid;
  helpers.searchEvents(null, null, eventID, (err, event) => {
    if (err) res.status(400).send({err});
    res.end(JSON.stringify(event));
  });
})

router.get('/team/:team', (req, res) => {
  let team = req.params.teamid;
  res.end(teamid);
})

router.post('/team', (req, res) => {
  helpers.setTeam(req.body, (err, message) => {
    if (err) res.status(400).send({err});
    else {
      res.end(message);
    }
  });
});

router.get('/games', (req, res) => {
  helpers.getGames((err, games) => {
    if (err) res.status(400).send({err});
    else res.end(JSON.stringify(games));
  });
});

router.get('/teams', (req, res) => {
  helpers.getTeams((err, teams) => {
    if (err) res.status(400).send({err});
    else res.end(JSON.stringify(teams));
  })
})

router.get('/teams_events/:type/:id', (req, res) => {
  console.log('Type: ', req.params.type, 'ID: ', req.params.id);
  if (req.params.type === 'getTeamsForEvent') {
    helpers.getTeamsForEvent(req.params.id, (err, teams) => {
      if (err) res.status(400).send({err});
      else res.send(JSON.stringify(teams))
    });
  } else if (req.params.type === 'getEventsForTeam') {
    helpers.getEventsForTeam(req.params.id, (err, events) => {
      if (err) res.status(400).send({err});
      else res.send(JSON.stringify(events))
    });
  } else {
    res.end();
  }
});
// Create a route that gets the event.

module.exports = router;
