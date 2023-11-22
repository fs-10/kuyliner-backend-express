const express = require("express");
const router = express.Router();

const user_auth = require("./user_route/auth.user.route");
const supplier_auth = require("./supplier_route/auth.supplier.route");
const role_base = require("./admin_route/role.route");
const category = require("./admin_route/category.route");
const review = require("./user_route/review.route");
const product_supplier = require("./supplier_route/product.route");
const promotion = require("./supplier_route/promotion.route");
const product = require("./user_route/product.user.route");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to kuyliner apps",
  });
});

// User
router.use("/review", review);
router.use("/user", user_auth);
router.use("/products", product);

// Supplier
router.use("/productSupplier", product_supplier);
router.use("/promotion", promotion);
router.use("/supplier", supplier_auth);

// Admin
router.use("/superadmin", role_base);
router.use("/superadmin", category);

module.exports = router;
