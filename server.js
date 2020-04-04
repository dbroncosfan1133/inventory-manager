// Requiring the necessary npm packages
require("dotenv").config();
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var passport = require("passport");
const routes = require("./routes");
const flash = require('connect-flash');
const session = require('express-session')
// Passport config
require('./passport/index')(passport);

// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server

// var axios = require("axios");
// var cheerio = require("cheerio");

var PORT = process.env.PORT || 3001;

// Initialize Express
var app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// Make public a static folder
app.use(express.static(path.join(__dirname, 'client/public')));
const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root));
// Use the routes folder
app.use(routes);

// Require in the db connection URL
const db = require("./db/keys").MongoURI;
// Connect to the Mongo DB
mongoose.connect(db, {
    useNewUrlParser: true,
    dbName: "hair-salon"
})
.then(() => {
    console.log('Connected to MongoDB')
    }
)
.catch(err => console.log(`Error connecting to database: ${err}`));

// Express session
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});