var UserSchema = require('../../../db/schema/User.js');

var User = {};

User.createUser = (username, password, email, firstName, lastName, profilePicURL) => {

  //create new user
  var newUser = new UserSchema ();
  newUser.username = username;
  newUser.password = newUser.generateHash(password);
  newUser.email = email;
  newUser.firstName = firstName;
  newUser.lastName = lastName;
  newUser.profilePicURL = profilePicURL;

  console.log('user', newUser)
  //save user to db
  newUser.save((err) => {
    if (err) {
      // send message to client that username is taken
      console.error('error with username')
    } else {
      console.log('user added')
    }
  });
};

//get all users
//We actually won't need this for our app, but good for testing db
User.findAllUsers = () => {
  return UserSchema.find({}).exec((err, users) => {
    return users;
  });
};

module.exports = User;