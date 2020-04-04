var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new InventorySchema object
// This is similar to a Sequelize model
var InventorySchema = new Schema({
  // `name` is required and of type String
  "Item Number": {
    type: String,
    required: true
  },
  // `quantity` is required and of type Integer
  Quantity: {
    type: Number,
  },
  Description: {
      type: String,
      required: true
  },
  Size: {
      type: Number,
      required: true
  },
  "UPC Code": {
      type: String,
  },
  "Salon Each": {
      type: String,
      required: true
  },
  Extended: {
      type: String
  },
  Category: {
      type: String
  }
},{
    collection: "inventory"
});

function getPrice(num){
    return (num/100).toFixed(2);
}

function setPrice(num){
    return num*100;
}

// This creates our model from the above schema, using mongoose's model method
var Inventory = mongoose.model("Inventory", InventorySchema, "inventories");

// Export the Inventory model
module.exports = Inventory;