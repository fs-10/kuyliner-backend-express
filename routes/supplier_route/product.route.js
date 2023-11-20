const express = require("express");
const {
  create_product,
  update_product,
  delete_product,
  get_all_product,
} = require("../../controllers/supplier_controller/product.controller");

const { token, has_role } = require("../../middleware");

const router = express.Router();

router.get("/", token, get_all_product);
router.post("/", token, create_product);
router.put("/:product_id", token, update_product);
router.delete("/:product_id", token, delete_product);

module.exports = router;
