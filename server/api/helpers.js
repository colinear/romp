const Event = require('../../db/schema/Event.js');
const Game = require('../../db/schema/Game.js');
const User = require('../../db/schema/User');

let helpers = {};

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

helpers.searchEvents = async ((name, game, callback) => {
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
});

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

helpers.createUser = async (newUserData, callback) => {
  let newUser = new User(newUserData);
  newUser.password = newUser.generateHash(newUser.password);
  newUser.save((err) => {
    if (err) callback(err, null, 'SERVER: USER ALREADY EXISTS'); 
    else callback(null, newUser, `SERVER: NEW USER ${newUser.username} SAVED`);
  });
};

helpers.loginUser = (username, password, callback) => {
  return User.findOne({ username: username }, (err, user) => {
    if (err) { throw err }
    if (user.username.length <= 0) {
      console.log(`SERVER: User ${username} does not exist.`);
      return;
    }
    if (!user.validPassword(password)) {
      console.log(`SERVER: ${username} entered an incorrect password.`);
      return;
    } else if (user.validPassword(password)) {
      console.log(`SERVER: Password for ${username} is correct.`)
    }
    return user;
  });
};

module.exports = helpers;
