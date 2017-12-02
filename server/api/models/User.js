
var User = require('../../../db/schema/User.js');

User.getUser = (username) => {
  return User.find({ username: username })
  .select('-password')
  .exec((err, user) => {
    if (err) {
      throw err;
    }

    // if user is not found (returns empty array)
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
    if (err) {throw err}
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

  // console.log('password in model: ', newUser.validPassword(password))

  //save user to db
  return newUser.save((err, user) => {
    if (err) {
      // *** need to send message to client that username is taken
      console.error('error with username');
      throw err;
    } else {
      console.log('user added: ', user);
      return user;
    }
  });
};

User.loginUser = (username, password) => {
  return User.find({ username: username }).exec((err, user) => {
    console.log('user in model: ', user);
    if (err) {
      throw err;
    }
    // if user is not found (returns empty array)
    if (user.length <= 0) {
      console.log('USER DOES NOT EXIST');
      return;
    }
    // if user is found but password is incorrect
    // if (!user.validPassword(password)) {
    //   console.log('Password Incorrect');
    //   return;
    // }

    return user;
  });
};

module.exports = User;








