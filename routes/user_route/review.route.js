const express = require("express");
const {
  create_review,
  update_review,
  delete_review,
  get_all_review,
  get_all_review_common,
  get_all_review_common_by_product,
} = require("../../controllers/user_controller/review.controller");

const { token, has_role } = require("../../middleware");

const router = express.Router();

router.get("/common", get_all_review_common);
router.get("/common/:product", get_all_review_common_by_product);
router.get("/", token, has_role("user"), get_all_review);
router.post("/", has_role("user"), token, create_review);
router.put("/:review_id", has_role("user"), token, update_review);
router.delete("/:review_id", has_role("user"), token, delete_review);

module.exports = router;
