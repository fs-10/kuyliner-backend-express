  const mongoose = require("mongoose");

  const product_schema = new mongoose.Schema({
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

  const Product = mongoose.model("Product", product_schema);

  module.exports = Product;
