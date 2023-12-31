const mongoose = require("mongoose");

const suppliers_schema = new mongoose.Schema({
  supplier_username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: String,
  address: { type: String, required: true },
  location_gmaps: String,
  profile_image: String,
  open_time: Date,
  closed_time: Date,
  day_of_week: String,
  role_id: {
    type: mongoose.ObjectId,
    ref: "Role_Bases",
  },
});

const Suppliers = mongoose.model("Suppliers", suppliers_schema);

module.exports = Suppliers;
