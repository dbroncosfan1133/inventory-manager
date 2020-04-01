const db = require("../db/models");

module.exports = {
  findAll: function(req, res) {
    db.Inventory
      .find(req.query)
      .sort({ itemNumber: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findLow: function(req, res) {
    db.Inventory
      .find({Quantity: { $gt: 15 } })
      .sort({ itemNumber: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Inventory
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const tempObj = {
      "Item Number": req.body.itemNumber,
      Quantity: req.body.quantity,
      Description: req.body.description,
      Size: req.body.size,
      "Salon Each": req.body.salonEach,
      Category: req.body.category
    }
    db.Inventory
      .create(tempObj)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
      const tempObj = {
      Quantity: req.body.quantity,
    }
    db.Inventory
      .findOneAndUpdate({ _id: req.params.id }, tempObj)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Inventory
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};