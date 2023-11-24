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
router.put("/:userId", token, editAccount);
router.delete("/:userId", token, deleteAccount);

module.exports = router;
