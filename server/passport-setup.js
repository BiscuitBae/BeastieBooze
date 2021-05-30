require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { CLIENT_ID, CLIENT_SECRET } = require('./config')

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(null, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // use the profile info (mainly the profile id) to check if the user is registered in your db
    User.findOrCreate({ googleId: profile.id }, function(err, user) {
      return done(err, user);
    });
  }
));