const express = require("express");
const {
  getAllAccount,
  getAccountById,
  editAccount,
  deleteAccount,
} = require("../../controllers/user_controller/account.user.controller");
const router = express.Router();

// router.get("/", getAllAccount);
router.get("/:userId", getAccountById);
router.get("/:userId", editAccount);
router.get("/:userId", deleteAccount);

module.exports = router;
