var UserSchema = require('../../../db/schema/User.js');

var User = {};

User.createUser = (username, password, email, firstName, lastName, profilePicURL) => {
  //create new user
  var newUser = new UserSchema ({
    username: username,
    password: password,// newUser.generateHash(password), // need to check !!
    email: email,
    firstName: firstName,
    lastName: lastName,
    profilePicURL: profilePicURL
  });

  //save new user to db
  newUser.save((err) => {
    if (err) {throw err}
    else {console.log('user added')}
  });
}

// User.createUser = (userObj) => {
//   var user = new User();

//   user.username = userObj.username;
//   user.password = userObj.password;
//   user.email = userObj.email;
//   user.firstName = userObj.firstName;
//   user.lastName = userObj.lastName;
//   user.profilePicURL = userObj.profilePicURL;

// }

module.exports = User;