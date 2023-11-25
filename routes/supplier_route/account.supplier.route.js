const express = require("express");
const router = express.Router();

const {
  getAccountSupplierById,
  deleteAccountSupplier,
  editAccountSupplier,
} = require("../../controllers/supplier_controller/account.supplier.controller");

const { token, has_role } = require("../../middleware");

// router.get("/:supplierId", getAccountSupplierById);
router.put("/:supplierId", token, has_role("supplier"), editAccountSupplier);
// router.delete("/:supplierId", token, deleteAccountSupplier);

module.exports = router;
