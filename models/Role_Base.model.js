const mongoose = require("mongoose");

const role_base_schema = new mongoose.Schema({
  role_name: String,
});

const Role_Base = mongoose.model("Role_Base", role_base_schema);

module.exports = Role_Base;
