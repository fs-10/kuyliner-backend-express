const { Categories } = require("../../models");

module.exports = {
  category_create: async (req, res) => {
    try {
      const { category_name } = req.body;
      const create_execute = await Categories.create({
        category_name,
      });

      // How to use
      // Use this on request body
      /*
        {
          "category_name": "create your category"
        }
      */

      res.status(201).json({
        message: "Create category has successfull",
        data: create_execute,
      });
    } catch (error) {
      console.log(`\nError : ${error}`);
      res.status(400).json({
        message: "Failed to create categoryy",
        error: error.message,
      });
    }
  },
  category_update: async (req, res) => {
    try {
      const { category_id } = req.params;
      const new_category_name = req.body.category_name;

      const update_execute = await Categories.findByIdAndUpdate(category_id, {
        category_name: new_category_name,
      });

      res.status(201).json({
        message: "Update category_name has successfull",
        data: update_execute,
      });
    } catch (error) {
      console.log(`\nError : ${error}`);
      res.status(400).json({
        message: "Failed to update category_name or category_name not found",
        error: error.message,
      });
    }
  },
  category_delete: async (req, res) => {
    try {
      const { category_id } = req.params;
      const delete_execute = await Categories.findByIdAndDelete(category_id);

      res.status(201).json({
        message: "Delete category has successfull",
        data: delete_execute,
      });
    } catch (error) {
      console.log(`\nError : ${error}`);
      res.status(400).json({
        message: "Failed to delete category or category not found",
        error: error.message,
      });
    }
  },
  category_show_all: async (req, res) => {
    try {
      const category = await Categories.find({});

      res.status(200).json({
        message: "Get all category has successfull",
        data: category,
      });
    } catch (error) {
      console.log(`\nError : ${error}`);
      res.status(404).json({
        message: "Failed to get data",
        error: error.message,
      });
    }
  },
};
