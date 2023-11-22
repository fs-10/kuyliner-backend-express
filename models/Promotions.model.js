const mongoose = require("mongoose");

const promotions_schema = new mongoose.Schema({
  due_date: { type: Date, required: true },
  start_date: { type: Date, required: true, default: Date.now() },
  status: { type: Boolean, required: true, default: false },
  product_id: {
    type: mongoose.ObjectId,
    ref: "Products",
  },
  supplier_email: {type: String, required: true}
});

const Promotions = mongoose.model("Promotions", promotions_schema);

module.exports = Promotions;
