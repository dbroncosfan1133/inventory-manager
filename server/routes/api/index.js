// Require in necessary dependencies
const express = require('express');
const router = require("express").Router();
const inventoryRoutes = require("./inventory");
const {
    ensureAuthenticated,
    forwardAuthenticated
} = require('../../controllers/auth');

// inventory routes
router.use("/inventory", inventoryRoutes);

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Login
router.get('/mainpage', ensureAuthenticated, (req, res) =>
    res.render('mainpage', {
        user: req.user
    })
);

module.exports = router;