const express = require("express");
const {
  getAllProduct,
  getAllProductByLocation,
  searchProduct,
} = require("../../controllers/user_controller/product.user.controller");
const router = express.Router();

router.get("/", getAllProduct);
router.get("/:search", searchProduct);

router.get("/:search/:location", getAllProductByLocation);

module.exports = router;
