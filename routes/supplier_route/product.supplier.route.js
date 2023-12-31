const express = require("express");
const {
  create_product,
  update_product,
  delete_product,
  get_all_product,
} = require("../../controllers/supplier_controller/product.controller");

const { token, has_role } = require("../../middleware");

const router = express.Router();

router.get("/", token, has_role("supplier"), get_all_product);
router.post("/", token, has_role("supplier"), create_product);
router.put("/:product_id", has_role("supplier"), token, update_product);
router.delete("/:product_id", token, has_role("supplier"), delete_product);

module.exports = router;
