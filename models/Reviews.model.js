const mongoose = require("mongoose");

const reviews_schema = new mongoose.Schema({
  text_review: { type: String, required: true },
  stars: { type: Number, required: true, max: 5 },
  date_create: { type: Date, required: true, default: Date.now },
  id_reviewers: {
    type: mongoose.ObjectId,
    ref: "Users",
  },
  id_products: {
    type: mongoose.ObjectId,
    ref: "Products"
  }
});

const Reviews = mongoose.model("Reviews", reviews_schema);

module.exports = Reviews;
