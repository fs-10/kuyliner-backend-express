const express = require("express");
const {
  create_review,
  update_review,
  delete_review,
  get_all_review,
} = require("../../controllers/user_controller/review.controller");

const { token, has_role } = require("../../middleware");

const router = express.Router();

router.get("/", token, get_all_review);
router.post("/", token, create_review);
router.put("/:review_id", token, update_review);
router.delete("/:review_id", token, delete_review);

module.exports = router;
