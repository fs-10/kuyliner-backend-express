const express = require("express");
const router = express.Router();

const auth = require("./auth.route");
const role_base = require("./admin/role.route");
const review = require("./user/review.route");
const product = require("./supplier/product.route");
const category = require("./admin/category.route");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to kuyliner apps",
  });
});

router.use("/auth", auth);

// User
router.use("/review", review);

// Supplier
router.use("/product", product);
// supplier promotion

// Admin
router.use("/superadmin", role_base);
router.use("/superadmin", category);

module.exports = router;
