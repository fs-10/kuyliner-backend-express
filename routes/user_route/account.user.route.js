const express = require("express");
const {
  getAllAccount,
  getAccountById,
  editAccount,
  deleteAccount,
} = require("../../controllers/user_controller/account.user.controller");
const router = express.Router();

const { token, has_role } = require("../../middleware");

// router.get("/", getAllAccount);
router.get("/:userId", token, has_role("user"), getAccountById);
router.put("/:userId", token, has_role("user"), editAccount);
// router.delete("/:userId", token, has_role("user"), deleteAccount);

module.exports = router;
