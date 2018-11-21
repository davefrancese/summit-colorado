const express = require("express");
require("./models/User"); //must be above passport require
require("./services/passport");
const keys = require("./config/keys");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 8000;

// ROUTES
require("./routes/authRoutes")(app);

app.listen(PORT);
