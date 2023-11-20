const express = require("express");
const { sign_in, sign_up } = require("../../controllers/supplier_controller/auth.supplier.controller");

const router = express.Router();

router.post("/signin", sign_in);
router.post("/signup", sign_up);

module.exports = router;
