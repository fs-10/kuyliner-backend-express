const mongoose = require("mongoose");

const products_schema = new mongoose.Schema({
  name_product: { type: String, required: true },
  price: { type: Number, required: true },
  product_image: String,
  supplier_id: {
    type: mongoose.ObjectId,
    ref: "Supplier",
  },
  user_id: {
    type: mongoose.ObjectId,
    ref: "User",
  },
  category_id: {
    type: mongoose.ObjectId,
    ref: "Category",
  },
});

const Products = mongoose.model("Products", products_schema);

module.exports = Products;
