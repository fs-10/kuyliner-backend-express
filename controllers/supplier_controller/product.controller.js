const { Products } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = {
  create_product: async (req, res) => {
    try {
      const { authorization } = req.headers;
      const token = authorization.split(" ")[1];
      const { id } = jwt.decode(token);

      const { name_product, price, category_id } = req.body;
      let { product_image } = req.body;

      // Nanti perlu nambah gambar, ini DEMO dulu
      product_image = product_image || "";

      const create_execute = await Products.create({
        name_product,
        price,
        product_image,
        category_id,
        supplier_id: id,
      });

      res.status(201).json({
        message: "Create product successfull",
        data: create_execute,
      });
    } catch (error) {
      console.log(`\nError : ${error}`);
      res.status(400).json({
        message: "Failed to create product data",
        error: error.message,
      });
    }
  },
  update_product: async (req, res) => {
    try {
      const { product_id } = req.params;
      const { name_product, price, product_image, category_id } = req.body;

      const update_execute = await Products.findByIdAndUpdate(product_id, {
        name_product,
        price,
        product_image,
        category_id
      });

      res.status(201).json({
        message: "Update product successfull",
        data: update_execute,
      });
    } catch (error) {
      console.log(`\nError : ${error}`);
      res.status(400).json({
        message: "Failed to update product data",
        error: error.message,
      });
    }
  },
  delete_product: async (req, res) => {
    try {
      const { product_id } = req.params;

      const delete_execute = await Products.findByIdAndDelete(product_id);

      res.status(201).json({
        message: "Delete product successfull",
        data: delete_execute,
      });
    } catch (error) {
      console.log(`\nError : ${error}`);
      res.status(400).json({
        message: "Failed to delete product data",
        error: error.message,
      });
    }
  },
  get_all_product: async (req, res) => {
    try {
      const { authorization } = req.headers;
      const token = authorization.split(" ")[1];
      const { id } = jwt.decode(token);

      const review = await Products.find({ supplier_id: id });

      res.status(200).json({
        message: "Get all product successfull",
        data: review,
      });
    } catch (error) {
      console.log(`\nError : ${error}`);
      res.status(404).json({
        message: "Failed to get product data",
        error: error.message,
      });
    }
  },
};
