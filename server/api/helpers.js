const Event = require('../../db/schema/Event.js');
const Game = require('../../db/schema/Game.js');
const User = require('../../db/schema/User');
const Team = require('../../db/schema/Team');
const jwt = require('jwt-simple');
const config = require('../config');

let helpers = {};

helpers.tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
};

helpers.loginUser = function(req, res, next) {

  // user already auth'd, just need to give token
  let { _id, username, profilePicURL, email } = req.user;
  res.send(JSON.stringify({ token: helpers.tokenForUser(req.user), user: { _id, username, profilePicURL, email }}));
};

helpers.isAdmin = function(req, res, next) {
  let { _id } = req.user;
  // Grab ID from user.

  
  // return boolean determining whether user that is logged in is auth'd to do special stuff
}

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
      // console.log(req.body)

      // send back identifying token
      res.json({ token: helpers.tokenForUser(user) });
    });
  });
}

helpers.createEvent = (eventData, callback) => {
  var newEvent = new Event (eventData);

  console.log('SERVER: NEW EVENT:', newEvent)
  //save event to db
  newEvent.save((err) => {
    console.log(err);
    callback(err, newEvent._id)
  });
};

helpers.getAllEvents = () => {
  return Event.find({}).exec((err, events) => {
    if (err) {throw err}
    return events;
  });
};

helpers.searchEvents = async (name, game, id, callback) => {
  console.log('Searching through events...');
  if (name == undefined && game == undefined && id == undefined) {
    console.log('test!!');
    var err, events = await Event.find({});
    callback(err, events);
  } else if (id) {
    var err, event = await Event.findById(id);
    callback(err, event);
  } if (name) {
    var err, events = await Event.find({name: {"$regex": name, "$options": "i"}});
    callback(err, events);
  } else if (game) {
    var err, game = await Game.find({name: game.toLowerCase()}, '_id');
    if (err) callback(err);
    var err, events = await Event.find({game});
    callback(err, events);
  } else if (!name && !game) {

  }
};

helpers.joinEvent = async (userID, eventID, callback) => {
  if (!userID || !eventID) {
    callback('SERVER: username or event not supplied');
  }

  // get user object with only returnInfo
  var returnInfo = '_id username email profilePicURL event';
  var err, user = await User.findOne({_id: userID}, returnInfo, {upsert: true});
  if (err) callback(err);

  // check if user has already joined
  if (user.event.indexOf(eventID) > -1) {
    callback('SERVER: user already joined')
  }

  // add user to event
  var err, event = await Event.findOneAndUpdate({_id: eventID}, { $push: {participants: user}});
  if (err) callback(err);

  // add eventID to user's events
  await User.findOneAndUpdate({_id: userID}, { $push: {event: event}});
  if (err) callback(err);

  callback(null, `SERVER: User successfully added to event!`)
}

helpers.getUser = (username, userID) => {
  if (username !== null) {
    return User.findOne({ username: username }).exec((err, user) => {
      if (err) { throw err }
      if (!user) { console.log('USER DOES NOT EXIST') }
      return user;
    });

  } else if (userID !== null) {
    return User.findById(userID).exec((err, user) => {
      if (err) { throw err }
      if (!user) { console.log('USER DOES NOT EXIST BY THAT ID') }
      return user;
    });
  }
};

helpers.setTeam = (team, callback) => {
  team = new Team(team);
  team.save((err) => {
    console.log(err);
    if (err) callback(err);
    else callback(null, `SERVER: Team successfully made!`);
  });
}

helpers.getAllUsers = () => {
  return User.find({}).exec((err, users) => {
    if (err) {throw err}
    return users;
  });
};

helpers.getTeamsForUser = () => {
  console.log('GetTeamForUser');
}

helpers.getUsersForTeam = (teamID, callback) => {
  User.find({teams: teamID}).exec((err, users) => {
    callback(err, users);
  });
}

helpers.getTeamsForEvent = (event, callback) => {
  Team.find({events: event}).exec((err, teams) => {
    callback(err, teams);
  });
}

helpers.getEventsForTeam = (team, callback) => {
  Event.find({team: team}).exec((err, events) => {
    callback(err, events);
  });
}

helpers.getGames = (callback) => {
  Game.find({}).exec((err, games) => {
    if (err) callback(err);
    else callback(null, games);
  });
}

helpers.getTeams = (callback) => {
  Team.find({}).exec((err, teams) => {
    if (err) callback(err);
    else callback(null, teams);
  });
}

helpers.searchDatabase = (query, callback) => {
  var results = {};
  User.find().or([{ 'firstName': { $regex: query }}, { 'lastName': { $regex: query }}, { 'username': {$regex: query}}]).exec(function(usersError, usersResults) {
    if (usersError) callback(usersError);
    else {
      let users = {users: usersResults};
      Event.find().or([{ 'event': { $regex: query }}, { 'description': { $regex: query }}, { 'game.name': {$regex: query}}]).exec(function(eventsError, eventsResults) {
        if (eventsError) callback(eventsError);
        else {
        let events = {events: eventsResults};
          Game.find().or([{'name': {$regex: query}}]).exec(function(gamesError, gamesResults) {
            if (gamesError) callback(gamesError);
            else {
              let games = {games: gamesResults};
              results = Object.assign({}, events, users, games);
              callback(null, results);
            }
          });
        }
      });
    }
  });
}

helpers.addFriend = async (userID, curUserID, callback) => {
  if (!userID) {
    callback('SERVER: username not supplied');
  }
  // get user object with only returnInfo
  var returnInfo = '_id username email profilePicURL friends';
  var friendsList = 'username friends'
  var err, user = await User.findOne({_id: userID}, returnInfo, {upsert: true});
  var err, curUser = await User.findOne({_id: curUserID}, friendsList);
  if (err) callback(err);
  // add user to friends
  var match = curUser.friends.find((friend) => friend.username === user.username)
  var isSelf =  curUser.username === user.username
  // console.log('usernames', curUser, user.username);
  if (match || isSelf) {
  } else {
    await User.findOneAndUpdate({_id: curUserID}, { $push: {friends: user}});
  }
  // console.log('now herererer', user);
  if (err) callback(err);
  callback(null, `SERVER: Friend Added!`)
}

helpers.removeFriend = async (userID, curUserID, callback) => {
  if (!userID) {
    callback('SERVER: username not supplied');
  }
  var returnInfo = '_id username email profilePicURL friends';
  var friendsList = 'username friends'
  var err, user = await User.findOne({_id: userID}, returnInfo, {upsert: true});
  var err, curUser = await User.findOne({_id: curUserID}, friendsList);
  if (err) callback(err);
  await User.findOneAndUpdate({_id: curUser}, { $pull: {friends: user}});
  if (err) callback(err);
  callback(null, `SERVER: Friend Added!`)
}

helpers.searchUsers = async (username, id, callback) => {
  console.log('Searching through users...');
  if (username === undefined && id === undefined) {
    console.log('test!!');
    var err, users = await User.find({});
    callback(err, users);
  } else if (id) {
    var err, user = await User.findById(id);
    callback(err, user);
  } if (name) {
    var err, users = await User.find({name: {"$regex": name, "$options": "i"}});
    callback(err, users);
  } else if (!name && !game) {

  }
};

module.exports = helpers;
