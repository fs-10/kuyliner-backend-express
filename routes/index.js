const express = require("express");
const router = express.Router();

const { categoryAdmin, roleAdmin } = require("./admin_route");

const {
  authSupplier,
  productSupplier,
  promotionSupplier,
} = require("./supplier_route");

const {
  accountUser,
  authUser,
  productUser,
  reviewUser,
} = require("./user_route");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to kuyliner apps",
  });
});

// User
router.use("/review", reviewUser);
router.use("/user", authUser);
router.use("/products", productUser);

// Supplier
router.use("/productSupplier", productSupplier);
router.use("/promotion", promotionSupplier);
router.use("/supplier", authSupplier);

// Admin
router.use("/superadmin", categoryAdmin);
router.use("/superadmin", roleAdmin);

module.exports = router;
