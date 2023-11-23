const { Products } = require("../../models");

module.exports = {
  searchProduct: async (req, res) => {
    try {
      const { search } = req.params;
      const productFilterSearch = await Products.find({
        name_product: { $regex: new RegExp(search, "i") },
      })
        .populate("supplier_id")
        .populate("category_id");

      res.status(200).json({
        message: "Success to get data",
        data: productFilterSearch,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      res.status(400).json({
        message: "Failed to get data search",
        error: error.message,
      });
    }
  },
  getAllProduct: async (req, res) => {
    try {
      const product = await Products.find({});

      res.status(200).json({
        message: "Success get all data product",
        data: product,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      res.status(400).json({
        message: "Failed to get data product",
        error: error.message,
      });
    }
  },
  getAllProductByLocation: async (req, res) => {
    try {
      const { search, location } = req.params;

      const productByLocation = await Products.find({
        name_product: { $regex: new RegExp(search, "i") },
      }).populate("supplier_id");

      const productInLocation = productByLocation.filter(
        (product) => product.supplier_id.address == location
      );

      res.status(200).json({
        message: "Success get all data product by category",
        data: productInLocation,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      res.status(400).json({
        message: "Failed to get data product",
        error: error.message,
      });
    }
  },
  getProductById: async (req, res) => {
    try {
      const { id } = req.params;

      const product = await Products.findById(id);

      res.status(200).json({
        message: "Success get data",
        data: product,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      res.status(400).json({
        message: "Failed to get data product",
        error: error.message,
      });
    }
  },
};
