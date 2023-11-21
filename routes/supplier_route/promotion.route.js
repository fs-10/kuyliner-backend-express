const express = require("express");
const {
  create_promotion,
  delete_promotion,
  get_all_promotion,
} = require("../../controllers/supplier_controller/promotion.controller");

const { token, has_role } = require("../../middleware");

const router = express.Router();

router.get("/", token, get_all_promotion);
router.post("/", token, create_promotion);
router.delete("/:promotion_id", token, delete_promotion);

module.exports = router;
