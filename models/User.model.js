const mongoose = require("mongoose");

const user_schema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: {
    first: { type: String, required: true },
    last: String,
  },
  location: String,
  profile_image: String,
  role_id: {
    type: mongoose.ObjectId,
    ref: "Role_Base",
  },
});

const User = mongoose.model("User", user_schema);

module.exports = User;