var User = require('../../../db/schema/User.js');

User = {};

User.createUser = (userObj) => {
  var user = new User();

  user.username = userObj.username;
  user.password = userObj.password;
  user.email = userObj.email;
  user.firstName = userObj.firstName;
  user.lastName = userObj.lastName;
  user.profilePicURL = userObj.profilePicURL;

}

mo