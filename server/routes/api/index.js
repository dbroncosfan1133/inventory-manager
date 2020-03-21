const router = require("express").Router();
const productRoutes = require("./products");

// product routes
router.use("/products", productRoutes);

module.exports = router;
