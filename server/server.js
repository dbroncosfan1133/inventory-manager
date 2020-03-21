// Requiring the necessary npm packages
require("dotenv").config();
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var passport = require("./passport");
const routes = require("./routes");


// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./db");

var PORT = process.env.PORT || 3000;

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

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/inventorymanager", {
    useNewUrlParser: true
});

// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});