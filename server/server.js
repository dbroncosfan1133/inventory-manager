// Requiring the necessary npm packages
require("dotenv").config();
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var passport = require("./passport");
const routes = require("./routes");

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
app.use(express.static("public"));
// Use the routes folder
app.use(routes);

// Require in the db connection URL
const db = require("./db/keys").MongoURI;
// Connect to the Mongo DB
console.log(db);
mongoose.connect(db, {
    useNewUrlParser: true,
    dbName: "hair-salon"
})
.then(() => {
    console.log('Connected to MongoDB')
    }
)
.catch(err => console.log(`Error connecting to database: ${err}`));

// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});