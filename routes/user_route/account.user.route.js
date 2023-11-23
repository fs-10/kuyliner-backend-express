const express = require("express");
const {
  getAllAccount,
  getAccountById,
  editAccount,
  deleteAccount,
} = require("../../controllers/user_controller/account.user.controller");
const router = express.Router();

const { token } = require("../../middleware");

// router.get("/", getAllAccount);
router.get("/:userId", getAccountById);
router.get("/:userId", token, editAccount);
router.get("/:userId", token, deleteAccount);

module.exports = router;
