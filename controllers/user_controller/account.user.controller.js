const { Users } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = {
  // getAllAccount: async (req, res) => {},
  getAccountById: async (req, res) => {
    try {
      const { userId } = req.params;

      const user = await Users.findById(userId);

      res.status(200).json({
        message: "Success to get account",
        data: user,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      res.status(400).json({
        message: "Failed to get data account",
        error: error.message,
      });
    }
  },
  editAccount: async (req, res) => {
    try {
      const { userId } = req.params;
      const { first_name, last_name, location, profile_image } = req.body;

      const user = await Users.findByIdAndUpdate(userId, {
        first_name,
        last_name,
        location,
        profile_image,
      });

      res.status(201).json({
        message: "Success to edit data user",
        data: user,
      });
    } catch (error) {
      console.log(`Error ${error}`);
      res.status(400).json({
        message: "Failed to edit data account",
        error: error.message,
      });
    }
  },
  deleteAccount: async (req, res) => {
    try {
      const { userId } = req.params;

      const user = await Users.findByIdAndDelete(userId);

      res.status(201).json({
        message: "Succes to delete data account",
        data: user,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      res.status(400).json({
        message: "Failed to delete data",
        error: error.message,
      });
    }
  },
};
