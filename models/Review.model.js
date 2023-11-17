const mongoose = require("mongoose");

const review_schema = new mongoose.Schema({
  text_review: { type: String, required: true },
  stars: { type: Number, required: true },
  date_create: { type: Date, required: true, default: Date.now },
  id_reviewers: {
    type: mongoose.ObjectId,
    ref: "User",
  },
});

const Review = mongoose.model("Review", review_schema);

module.exports = Review;
