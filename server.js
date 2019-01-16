// import dependencies
const express = require('express');
const path = require('path');

const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;

// set up express server
const app = express();

// set up express middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(session({secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets
app.use(express.static('client/build'));
// Add routes, both API and route to client/build
app.use(routes);

// Set up passport to authenticate
const User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// serve up front end from server ONLY if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// turn on routes
app.use(routes);

// set up a wildcard route just in case all of the other routes fail
app.get("*", function(req,res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// turn on mongo connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/digfiction", {useNewUrlParser: true});

// turn on server
app.listen(PORT, () => console.log(`🗺️ ==> Server now on ${PORT}`))