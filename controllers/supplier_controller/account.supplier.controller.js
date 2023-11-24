const { Suppliers } = require("../../models");

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
        first_name,
        address,
        last_name,
        location_gmaps,
        profile_image,
        open_time,
        closed_time,
        day_of_week,
      } = req.body;

      first_name = first_name || "";
      address = address || "";
      last_name = last_name || "";
      location_gmaps = location_gmaps || "";
      profile_image = profile_image || "";
      open_time = open_time || "";
      closed_time = closed_time || "";
      day_of_week = day_of_week || "";

      const supplier = await Suppliers.findByIdAndUpdate(supplierId, {
        newFirstName,
        last_name,
        newAddress,
        location_gmaps,
        profile_image,
        open_time,
        closed_time,
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
};
