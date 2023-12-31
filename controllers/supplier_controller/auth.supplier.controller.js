const { Suppliers } = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

module.exports = {
  sign_in: async (req, res) => {
    try {
      const { email, password } = req.body;
      const supplier = await Suppliers.findOne({ email: email }).populate("role_id");

      if (!supplier) {
        res.status(404).json({
          message: `Account not found`,
        });
      } else {
        if (!bcrypt.compareSync(password, supplier.password)) {
          res.status(401).json({
            message: "Wrong password",
          });
        } else {

          const supplier_token = jwt.sign(
            {
              id: supplier._id,
              email: supplier.email,
              role: supplier.role_id.role_name,
            },
            process.env.KEY
          );

          res.status(200).json({
            message: "Login success",
            token: supplier_token,
          });
        }
      }
    } catch (error) {
      console.log(`\nError : ${error}`);
      res.status(400).json({
        message: "Server error",
        error: error.message,
      });
    }
  },
  sign_up: async (req, res) => {
    try {
      const { supplier_username, email, password, first_name, address } =
        req.body;

      let {
        last_name,
        location_gmaps,
        profile_image,
        open_time,
        closed_time,
        day_of_week,
      } = req.body;

      const find_supplier = await Suppliers.findOne({ email: email });

      if (find_supplier != null) {
        if (find_supplier.email === email) {
          res.status(400).json({
            message: "Email already in use",
          });
        }
      } else {
        const saltRounds = 10;
        const encrypt_password = bcrypt.hashSync(password, saltRounds);

        last_name = last_name || "";
        location_gmaps = location_gmaps || "";
        profile_image = profile_image || "";
        open_time = open_time || "";
        closed_time = closed_time || "";
        day_of_week = day_of_week || "";

        const supplier = await Suppliers.create({
          supplier_username,
          email,
          password: encrypt_password,
          first_name,
          last_name,
          address,
          location_gmaps,
          profile_image,
          open_time,
          closed_time,
          day_of_week,
          role_id: "65576c984615aad8dc605014",
        });

        res.status(201).json({
          message: "Account supplier has created",
          any_message: `Create: ${supplier.supplier_username}`,
        });
      }
    } catch (error) {
      console.log(`\nError : ${error}`);
      res.status(400).json({
        message: "Failed to create account supplier",
        error: error.message,
      });
    }
  },
};
