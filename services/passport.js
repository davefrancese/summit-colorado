const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

// for cookies
passport.serializeUser((user, done) => {
  // user.id is ref mongo's id under user
  done(null, user.id);
});

// for cookies
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleSecret,
      callbackURL: "/auth/google/callback",
      // proxy is for passport strategy changing
      // from https to http when in production
      proxy: true
    },
    // hits after callback
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // dont make new one
          done(null, existingUser);
        } else {
          new User({
            googleId: profile.id,
            displayName: profile.displayName
          })
            .save()
            .then(user => {
              done(null, user);
            });
        }
      });
    }
  )
);
