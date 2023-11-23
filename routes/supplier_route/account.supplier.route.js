const express = require("express");
const router = express.Router();

const {
  getAccountSupplierById,
  deleteAccountSupplier,
  editAccountSupplier,
} = require("../../controllers/supplier_controller/account.supplier.controller");

const { token } = require("../../middleware");

router.get("/:supplierId", getAccountSupplierById);
router.put("/:supplierId", token, editAccountSupplier);
router.delete("/:supplierId", token, deleteAccountSupplier);

module.exports = router;
