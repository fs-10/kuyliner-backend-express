const { Suppliers } = require("../../models");
const cloudinary = require("../../config/cloudinary_connection");

module.exports = {
  // getAllAccountSupplier: async (req, res) => {},
  getAccountSupplierById: async (req, res) => {
    try {
      const { supplierId } = req.params;

      const supplier = await Suppliers.findById(supplierId);

      res.status(200).json({
        message: "Succes to get account supplier",
        data: supplier,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      res.status(400).json({
        message: "Failed to get account supplier",
        error: error.message,
      });
    }
  },
  editAccountSupplier: async (req, res) => {
    try {
      const { supplierId } = req.params;
      let {
        supplier_username,
        first_name,
        address,
        last_name,
        location_gmaps,
        profile_image,
        open_time,
        closed_time,
        day_of_week,
      } = req.body;

      const openTime = new Date();
      openTime.setHours(Number(open_time.split(":")[0]));
      openTime.setMinutes(Number(open_time.split(":")[1]));

      const closedTime = new Date();
      closedTime.setHours(Number(closed_time.split(":")[0]));
      closedTime.setMinutes(Number(closed_time.split(":")[1]));

      const image = await cloudinary.uploader.upload(
        profile_image,
        (error, result) => console.log(error)
      );

      const supplier = await Suppliers.findByIdAndUpdate(supplierId, {
        supplier_username,
        first_name,
        last_name,
        address,
        location_gmaps,
        profile_image: image.secure_url,
        open_time: openTime,
        closed_time: closedTime,
        day_of_week,
      });

      res.status(201).json({
        message: "Success to edit account supplier",
        data: supplier,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      res.status(400).json({
        message: "Failed to edit account supplier",
        error: error.message,
      });
    }
  },
  deleteAccountSupplier: async (req, res) => {
    try {
      const { supplierId } = req.params;
      const supplier = await Suppliers.findById(supplierId);

      res.status(201).json({
        message: "Success to edit account supplier",
        data: supplier,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      res.status(400).json({
        message: "Failed to edit account supplier",
        error: error.message,
      });
    }
  },

  getAllSupplier: async (req, res) => {
    try {
      const supplier = await Suppliers.find({});

      res.status(200).json({
        message: "Success to edit account supplier",
        data: supplier,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      res.status(400).json({
        message: "Failed to get all supplier",
        error: error.message,
      });
    }
  }
};
