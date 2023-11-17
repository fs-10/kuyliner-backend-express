const mongoose = require("mongoose");

const categories_schema = new mongoose.Schema({
  categories_name: String,
});

const Categories = mongoose.model("Categories", categories_schema);

module.exports = Categories;
