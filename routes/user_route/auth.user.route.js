const express = require("express");
const { sign_in, sign_up } = require("../../controllers/user_control/auth.user.control");

const router = express.Router();

router.post("/signin", sign_in);
router.post("/signup", sign_up);

module.exports = router;
