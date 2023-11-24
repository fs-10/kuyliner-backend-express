const express = require("express");
const {
  role_create,
  role_update,
  role_delete,
  role_show_all,
} = require("../../controllers/admin_controller/role.controller");

const router = express.Router();

router.post("/role_base", role_create);
router.put("/role_base/:role_id", role_update);
router.delete("/role_base/:role_id", role_delete);
router.get("/role_base", role_show_all);

module.exports = router;
