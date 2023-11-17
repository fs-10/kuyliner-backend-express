const express = require("express");
const {
  role_create,
  role_update,
  role_delete,
  role_show_all,
} = require("../controllers/role.controller");

const router = express.Router();

router.post("/superadmin/role_base/", role_create);
router.put("/superadmin/role_base/:role_id", role_update);
router.delete("/superadmin/role_base/:role_id", role_delete);
router.get("/superadmin/role_base/", role_show_all);

module.exports = router;
