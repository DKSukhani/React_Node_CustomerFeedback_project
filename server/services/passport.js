const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require('mongoose');
const keys = require("../config/keys");

<<<<<<< Updated upstream
const User = mongoose.model('users');
=======
const User = mongoose.model('users')
>>>>>>> Stashed changes

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("accessToken is ", accessToken);
      console.log("refreshToken is ", refreshToken);
      console.log("profile is ", profile);
<<<<<<< Updated upstream
      new User ({googleId: profile.id});
=======
      new User ({ googleId: profile.id });
>>>>>>> Stashed changes
    }
  )
);
