const mongoose = require("mongoose");

const supplier_schema = new mongoose.Schema({
  supplier_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: String,
  address: { type: String, required: true },
  location_gmaps: String,
  profile_image: String,
  open_time: Date,
  closed_time: Date,
  open_day: String,
  closed_day: String,
  role_id: {
    type: mongoose.ObjectId,
    ref: "Role_Base",
  },
});

const Supplier = mongoose.model("Supplier", supplier_schema);

module.exports = Supplier;
