import axios from "axios";

export default {
  // Gets all inventory items
  getAllInventory: function() {
    console.log("Get all inventory fired");
    return axios.get("/api/inventory");
  },
  // Gets the inventory item with the given id
  getInventory: function(id) {
    return axios.get("/api/inventory/" + id);
  },
  // Deletes the inventory item with the given id
  deleteInventory: function(id) {
    return axios.delete("/api/inventory/" + id);
  },
  // Saves new item to the inventory database
  saveInventory: function(inventoryData) {
    return axios.post("/api/inventory", inventoryData);
  }
};