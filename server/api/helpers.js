const Event = require('../../db/schema/Event.js');
const Game = require('../../db/schema/Game.js');
const User = require('../../db/schema/User');
const jwt = require('jwt-simple');
const config = require('../config');

let helpers = {};

helpers.tokenForUser = (user) => {
  console.log('TOKEN USER: ', user);
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
};

helpers.loginUser = function(req, res, next) {
  console.log("HELLO");
  // user already auth'd, just need to give token
  res.send({ token: helpers.tokenForUser(req.user) });
};

helpers.createUser = function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(422).send({ error: 'You must provide username and password' })
  }

  User.findOne({ username: username }, function(err, existingUser) {
    if (err) { return next(err) }
    if (existingUser) {
      return res.status(422).send({ error: 'username is in use' });
    }

    const user = new User(req.body);
    user.save(function(err) {
      if (err) { return next(err) }

      // send back identifying token
      res.json({ token: helpers.tokenForUser(user) });
    });
  });
}

helpers.createEvent = (eventData, callback) => {
  //create new event
  var newEvent = new Event (eventData);

  console.log('SERVER: NEW EVENT:', newEvent)
  //save event to db
  newEvent.save((err) => {
    callback(err, 'SERVER: Event added.')
  });
};

helpers.getAllEvents = () => {
  return Event.find({}).exec((err, events) => {
    if (err) {throw err}
    return events;
  });
};

helpers.searchEvents = async (name, game, callback) => {
  if (name) {
    var err, events = await Event.find({name: {"$regex": name, "$options": "i"}});
    callback(err, events);
  } else if (game) {
    var err, game = await Game.find({name: game.toLowerCase()}, '_id');
    if (err) callback(err);
    var err, events = await Event.find({game});
    callback(err, events);
  } else if (!name && !game) {
    var err, events = await Event.find({});
    callback(err, events);
  }
};

helpers.joinEvent = async (username, event, callback) => {
  if (!username || !event) {
    callback('SERVER: username or event not supplied');
  }
  var err, userID = await User.findOne({username}, '_id');
  if (err) callback(err);
  var err, event = await Event.findOneAndUpdate({name: event}, { $push: {users: userID}});
  callback(null, `SERVER: User ${username} successfully added to event ${event.name}!`)
}

helpers.getUser = username => {
  return User.findOne({ username: username }).exec((err, user) => {
    if (err) {
      throw err;
    }
    if (!user) {
      console.log('USER DOES NOT EXIST');
    }
    return user;
  });
};

helpers.getAllUsers = () => {
  return User.find({}).exec((err, users) => {
    if (err) {throw err}
    return users;
  });
};

module.exports = helpers;
