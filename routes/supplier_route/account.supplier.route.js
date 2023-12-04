const express = require("express");
const router = express.Router();

const {
  getAccountSupplierById,
  deleteAccountSupplier,
  editAccountSupplier,
  getAllSupplier
} = require("../../controllers/supplier_controller/account.supplier.controller");

const { token, has_role } = require("../../middleware");

// router.get("/:supplierId", getAccountSupplierById);
router.put("/:supplierId", token, has_role("supplier"), editAccountSupplier);
router.get("/", getAllSupplier);
// router.delete("/:supplierId", token, deleteAccountSupplier);

module.exports = router;
