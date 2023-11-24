const express = require("express");
const {
  category_create,
  category_update,
  category_delete,
  category_show_all,
} = require("../../controllers/admin_controller/category.controller");

const router = express.Router();

router.post("/category", category_create);
router.put("/category/:category_id", category_update);
router.delete("/category/:category_id", category_delete);
router.get("/category", category_show_all);

module.exports = router;
