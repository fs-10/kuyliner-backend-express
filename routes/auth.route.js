const express = require("express");
const { sign_in, sign_up_user, sign_up_supplier } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/signup/user", sign_up_user);
router.post("/signup/supplier", sign_up_supplier);
router.post("/signin", sign_in);

module.exports = router;