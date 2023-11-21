const { Promotions, Products } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = {
  create_promotion: async (req, res) => {
    try {
      const { authorization } = req.headers;
      const token = authorization.split(" ")[1];
      const { id } = jwt.decode(token);

      const { product_id, due_date } = req.body;
      const one_day = 1000 * 60 * 60 * 24;

      const create_execute = await Promotions.create({
        product_id,
        supplier_id: id,
        due_date: one_day * due_date,
      });

      res.status(201).json({
        message: "Create promotion successfull",
        data: create_execute,
      });
    } catch (error) {
      console.log(`\nError : ${error}`);
      res.status(400).json({
        message: "Failed to promotion review data",
        error: error.message,
      });
    }
  },
  delete_promotion: async (req, res) => {
    try {
      const { promotion_id } = req.params;

      const delete_execute = await Promotions.findByIdAndDelete(promotion_id);

      res.status(201).json({
        message: "Delete promotion successfull",
        data: delete_execute,
      });
    } catch (error) {
      console.log(`\nError : ${error}`);
      res.status(400).json({
        message: "Failed to delete promotion data",
        error: error.message,
      });
    }
  },
  get_all_promotion: async (req, res) => {
    try {
      const { authorization } = req.headers;
      const token = authorization.split(" ")[1];
      const { id } = jwt.decode(token);

      const promotion = await Promotions.find({ supplier_id: id });

      res.status(200).json({
        message: "Get all review successfull",
        data: promotion,
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
