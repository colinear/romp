const router = require('express').Router();
const helpers = require('./helpers.js');
const passportService = require('../services/passport');
const passport = require('passport');
const config = require('../config');
const axios = require('axios');

const igdb = require('igdb-api-node').default;
const client = igdb(config.IGDB_KEY);

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });
// const requireTwitchLogin = passport.authenticate('twitch', { failureRedirect: '/' })

router.post('/signup', helpers.createUser);

router.post('/login', requireLogin, helpers.loginUser);

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
  // console.log(req.params.username);
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

// router.get('/auth/twitch', passport.authenticate('twitch'));
// router.get('/auth/twitch/callback', requireTwitchLogin, function(req, res) {
//     // Successful authentication, redirect home.
//     res.end();
// });
// router.get('/', (req, res) => {
//   res.render('index');
// })

router.get('/team/players/:teamid', (req, res) => {
  let teamID = req.params.teamid;
  helpers.getUsersForTeam(teamID, (err, users) => {
    if (err) res.status(400).send({err});
    else res.send(users);
  });
});

router.post('/createEvent', (req, res) => {
  console.log('req.body in routes: ', req.body)
  helpers.createEvent(req.body, (err, eventID) => {
    if (err) res.status(400).send({ err });
    else res.send(eventID);
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
  helpers.joinEvent(req.body.userID, req.body.eventID, (err, message) => {
    if (err) res.status(400).send({ err });
    else {res.end(message)}
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

let desiredFields = [
  'id', 'name', 'slug', 'url', 'summary', 'storyline',
  'popularity', 'total_rating', 'aggregated_rating', 'developers',
  'category', 'keywords', 'genres', 'first_release_date', 'release_dates',
  'screenshots', 'videos', 'cover', 'esrb', 'websites',
  'tags', 'rating',
];

router.get('/games', (req, res) => {
  client.games({
    filters: {
      // 'genres.any': [15, 26, 32]
      'release_dates.date-gt': '2017-01-01',
      'release_dates.date-lt': '2017-12-31',
    },
    limit: 15,
    offset: 0,
    order: 'rating:desc',
}, desiredFields)
    .then(games => {
      res.json(games)
    })
    .catch(err => {
      console.log(err)
      res.status(401).send({ err });
    })
})

// router.get('/games', (req, res) => {
//   helpers.getGames((err, games) => {
//     if (err) res.status(400).send({err});
//     else res.end(JSON.stringify(games));
//   });
// });

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

router.post('/search', (req, res) => {
  let { query } = req.body;
  helpers.searchDatabase(query, (err, results) => {
    console.log('/search', query)
    if (err) res.status(200).send({err});
    else res.end(JSON.stringify(results));
  });
});

router.post('/gameSearch', (req, res) => {
  let { query } = req.body;
  console.log('BACKEND GAME SEARCH: ', req.body);
  client.games({
    // filters: {
    //   'genres.any': [15, 26, 32]
    //   'release_dates.date-gt': '2017-01-01',
    //   'release_dates.date-lt': '2017-12-31',
    // },
    limit: 15,
    offset: 0,
    search: JSON.stringify(req.body),
    order: 'rating:desc',
}, desiredFields)
    .then(games => {
      res.json(games)
    })
    .catch(err => {
      console.log(err)
      res.status(401).send({ err });
    })
})

module.exports = router;
