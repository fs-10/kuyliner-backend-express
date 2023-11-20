const express = require("express");
const {
  create_promotion,
  delete_promotion,
  get_all_promotion,
} = require("../../controllers/supplier_controller/promotion.controller");

const { token, has_role } = require("../../middleware");

const router = express.Router();

router.get("/", token, has_role("supplier"), get_all_promotion);
router.post("/", token, has_role("supplier"), create_promotion);
router.delete("/:promotion_id", token, has_role("supplier"), delete_promotion);

module.exports = router;
