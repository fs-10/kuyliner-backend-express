const express = require("express");
const router = express.Router();

const auth = require("./auth.route");
const role_base = require("./role.route");
const review = require("./review.route");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to kuyliner apps",
  });
});

router.use("/auth", auth);
router.use("/role", role_base);

// User
router.use("/review", review);

// Supplier

module.exports = router;
