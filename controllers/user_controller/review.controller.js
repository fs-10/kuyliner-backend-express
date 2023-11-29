const { Reviews } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = {
  create_review: async (req, res) => {
    try {
      const { authorization } = req.headers;
      const token = authorization.split(" ")[1];
      const { id } = jwt.decode(token);
      const { text_review, stars, id_products } = req.body;

      const create_execute = await Reviews.create({
        text_review,
        stars,
        id_products,
        id_reviewers: id,
        date_create: Date.now(),
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
  update_review: async (req, res) => {
    try {
      const { review_id } = req.params;
      const { text_review, stars } = req.body;

      const update_execute = await Reviews.findByIdAndUpdate(review_id, {
        text_review,
        stars,
        date_create: Date.now(),
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
  delete_review: async (req, res) => {
    try {
      const { review_id } = req.params;

      const delete_execute = await Reviews.findByIdAndDelete(review_id);

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
  get_all_review: async (req, res) => {
    try {
      const { authorization } = req.headers;
      const token = authorization.split(" ")[1];
      const { id } = jwt.decode(token);

      const review = await Reviews.find({ id_reviewers: id });

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
  get_all_review_common: async (req, res) => {
    try {

      const review = await Reviews.find();

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
