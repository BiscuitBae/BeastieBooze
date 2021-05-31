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
    callbackURL: "http://localhost:8080/auth/google/callback"
  },
  // passport callback function
  (accessToken, refreshToken, profile, done) => {

    // destructure the info google sends back to us as 'profile', pulling out whatever we need
    // renaming their variables to whatever we want to match our model
    // they give access to id, displayName, given_name(first name), family_name(last name), picture, email
    const {
      id: googleId, // this will be a unique value we can use to check if they are already stored in our db
      displayName: username,
      email: email
    } = profile;

    // create a new user object
    const user = { googleId, username, email };

    // use the profile info (mainly the profile id) to check if the user is registered in your db
    User.findOrCreate({ googleId: profile.id }, function(err, user) {
      return done(err, user);
    });
  }
));