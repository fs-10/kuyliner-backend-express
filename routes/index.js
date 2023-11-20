const express = require("express");
const router = express.Router();

const user_auth = require("./user_route/auth.user.route");
const supplier_auth = require("./supplier_route/auth.supplier.route");
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

// User
router.use("/review", review);
router.use("/user", user_auth);

// Supplier
router.use("/product", product);
router.use("/promotion", promotion);
router.use("/supplier", supplier_auth);

// Admin
router.use("/superadmin", role_base);
router.use("/superadmin", category);

module.exports = router;
