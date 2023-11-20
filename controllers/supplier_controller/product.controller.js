const { Products, Reviews } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = {
  create_product: async (req, res) => {
    try {
      const { authorization } = req.headers;
      const token = authorization.split(" ")[1];
      const { id } = jwt.decode(token);

      const { name_product, price, product_image } = req.body;

      const create_execute = await Products.create({
        name_product,
        price,
        product_image,
        supplier_id: id,
      });

      res.status(201).json({
        message: "Create review successfull",
        data: create_execute,
      });
    } catch (error) {
      console.log(`\nError : ${error}`);
      res.status(400).json({
        message: "Failed to create review data",
        error: error.message,
      });
    }
  },
  update_product: async (req, res) => {
    try {
      const { product_id } = req.params;
      const { name_product, price, product_image } = req.body;

      const update_execute = await Products.findByIdAndUpdate(product_id, {
        name_product,
        price,
        product_image,
      });

      res.status(201).json({
        message: "Update review successfull",
        data: update_execute,
      });
    } catch (error) {
      console.log(`\nError : ${error}`);
      res.status(400).json({
        message: "Failed to update review data",
        error: error.message,
      });
    }
  },
  delete_product: async (req, res) => {
    try {
      const { product_id } = req.params;

      const delete_execute = await Products.findByIdAndDelete(product_id);

      res.status(201).json({
        message: "Delete review successfull",
        data: delete_execute,
      });
    } catch (error) {
      console.log(`\nError : ${error}`);
      res.status(400).json({
        message: "Failed to delete review data",
        error: error.message,
      });
    }
  },
  get_all_product: async (req, res) => {
    try {
      const { authorization } = req.headers;
      const token = authorization.split(" ")[1];
      const { id } = jwt.decode(token);

      const review = await Products.find({ id_reviewers: id });

      res.status(200).json({
        message: "Get all review successfull",
        data: review,
      });
    } catch (error) {
      console.log(`\nError : ${error}`);
      res.status(404).json({
        message: "Failed to get review data",
        error: error.message,
      });
    }
  },
};
