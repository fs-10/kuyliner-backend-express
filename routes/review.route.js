const express = require("express");
const {
  create_review,
  update_review,
  delete_review,
  get_all_review,
} = require("../controllers/review.controller");

const { token, has_role } = require("../middleware");

const router = express.Router();

router.get("/", token, has_role("user"), get_all_review);
router.post("/", token, has_role("user"), create_review);
router.put("/:review_id", token, has_role("user"), update_review);
router.delete("/:review_id", token, has_role("user"), delete_review);

module.exports = router;
