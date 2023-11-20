const express = require("express");
const router = express.Router();

const auth = require("./auth.route");
const role_base = require("./admin_route/role.route");
const category = require("./admin_route/category.route");
const review = require("./user_route/review.route");
const product = require("./supplier_route/product.route");
const promotion = require("./supplier_route/promotion.route");

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
router.use("/promotion", promotion);

// Admin
router.use("/superadmin", role_base);
router.use("/superadmin", category);

module.exports = router;
