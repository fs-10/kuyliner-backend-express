const mongoose = require("mongoose");

const role_bases_schema = new mongoose.Schema({
  role_name: String,
});

const Role_Bases = mongoose.model("Role_Bases", role_bases_schema);

module.exports = Role_Bases;
