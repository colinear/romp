const passport = require('passport');
const User = require('../db/schema/User');
const config = process.env;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const TwitchStrategy = require('passport-twitch').Strategy;

const localLogin = new LocalStrategy({}, (username, password, done) => {
  User.findOne({username}, (err, user) => {
    if (err) return done(err);
    if (!user) return done(null, false);

    user.validPassword(password, (err, isMatch) => {
      if (err) return done(err);
      if (!isMatch) return done(null, false);
      return done(null, user);
    })
  })
})

console.log('Process env stuff: ', process.env.TWITCH_CLIENT_ID);

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub, (err, user) => {
    if (err) return done(err, false);
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  })
})

// const twitchOptions = {
//   clientID: config.TWITCH_CLIENT_ID,
//   clientSecret: config.TWITCH_CLIENT_SECRET,
//   callbackURL: "http://127.0.0.1:3000/auth/twitch/callback",
//   scope: "user_read"
// }

// const twitchLogin = new TwitchStrategy(twitchOptions, (accessToken, refreshToken, profile, done) => {
//     User.findOrCreate({ twitchId: profile.id }, (err, user) => {
//       return done(err, user);
//     });
//   }
// )

// passport.serializeUser(function(user, done) { done(null, user) });
// passport.deserializeUser(function(user, done) { done(null, user) });

passport.use(jwtLogin);
passport.use(localLogin);
// passport.use(twitchLogin);
