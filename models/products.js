var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ProductSchema = new Schema({
  // `name` is required and of type String
  itemNumber: {
    type: String,
    required: true
  },
  // `quantity` is required and of type Integer
  quantity: {
    type: Number,
  },
  description: {
      type: String,
      required: true
  },
  size: {
      type: String,
      required: true
  },
  UPCCode: {
      type: String,
  },
  salonEach: {
      type: Number,
      set: setPrice,
      get: getPrice,
      required: true
  },
  category: {
      type: String
  }
});

function getPrice(num){
    return (num/100).toFixed(2);
}

function setPrice(num){
    return num*100;
}

// This creates our model from the above schema, using mongoose's model method
var Product = mongoose.model("Users", ProductSchema);

// Export the User model
module.exports = Product;