const mongoose = require("mongoose");

const category_schema = new mongoose.Schema({
  category_name: String,
});

const Category = mongoose.model("Category", category_schema);

module.exports = Category;
