var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  // `name` is required and of type String
  name: {
    type: String,
    required: true
  },
  // `password` is required and of type String
  password: {
    type: String,
    required: true
  },

});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("Users", UserSchema);

// Export the User model
module.exports = User;