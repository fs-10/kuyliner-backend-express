const mongoose = require("mongoose");

const users_schema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: String,
  location: String,
  profile_image: String,
  role_id: {
    type: mongoose.ObjectId,
    ref: "Role_Base",
  },
});

const Users = mongoose.model("Users", users_schema);

module.exports = Users;
