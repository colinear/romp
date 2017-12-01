var User = require('../../../db/schema/User.js');

User.getUser = username => {
  return User.find({ username: username }).exec((err, user) => {
    if (err) {
      throw err;
    }

    // returns empty array
    if (user.length <= 0) {
      console.log('USER DOES NOT EXIST');
    }
    return user;
  });
};

//get all users
//We won't need this for our app, but good for testing db
User.getAllUsers = () => {
  return User.find({}).exec((err, users) => {
    if (err) {
      throw err;
    }
    return users;
  });
};

User.createUser = (username, password, email, firstName, lastName, profilePicURL) => {
  //create new user
  var newUser = new User();
  newUser.username = username;
  newUser.password = newUser.generateHash(password);
  newUser.email = email;
  newUser.firstName = firstName;
  newUser.lastName = lastName;
  newUser.profilePicURL = profilePicURL;

  //save user to db
  newUser.save(err => {
    if (err) {
      // *** need to send message to client that username is taken
      console.error('error with username');
    } else {
      console.log('user added');
    }
  });
};

module.exports = User;
