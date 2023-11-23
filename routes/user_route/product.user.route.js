const express = require("express");
const {
  getAllProduct,
  getAllProductByLocation,
  searchProduct,
  getProductById
} = require("../../controllers/user_controller/product.user.controller");
const router = express.Router();

router.get("/search/", getAllProduct);
router.get("/search/:search", searchProduct);

// router.get("/:search/:location", getAllProductByLocation);
router.get("/:id", getProductById);

module.exports = router;
