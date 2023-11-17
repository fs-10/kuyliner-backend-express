const { Users, Suppliers } = require("../models");
const bcrypt = require("bcrypt");

require("dotenv").config();

module.exports = {
  sign_in: (req, res) => {},
  sign_up_user: async (req, res) => {
    try {
      const { username, email, password, first_name, role_id } = req.body;
      let { last_name, location, profile_image } = req.body;

      const saltRounds = 10;
      const encrypt_password = bcrypt.hashSync(password, saltRounds);

      last_name = last_name || "";
      location = location || "";
      profile_image = profile_image || "";

      const user = await Users.create({
        username,
        email,
        password: encrypt_password,
        first_name,
        last_name,
        location,
        profile_image,
        role_id,
      });

      // Usage sign up user on body
      /* 
        {
          "username": "han",
          "email": "han123@gmail.com",
          "password": "han123",
          "first_name": "hans",
          "role_id": "6557612983f852d918d7cc91" => user
        }
      */

      res.status(201).json({
        message: "Account has created",
        any_message: `Create: ${user.username}`,
      });
    } catch (error) {
      console.log(`\nError : ${error}`);
      res.status(400).json({
        message: "Failed to create account",
        error: error.message,
      });
    }
  },
  sign_up_supplier: async (req, res) => {
    try {
      const { supplier_username, email, password, first_name, address, role_id } =
        req.body;

      let {
        last_name,
        location_gmaps,
        profile_image,
        open_time,
        closed_time,
        day_of_week,
      } = req.body;

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
        role_id,
      });

        // Usage sign up supplier on body
      /* 
        {
          "supplier_username": "han_sup",
          "email": "han123@gmail.com",
          "password": "han123",
          "first_name": "hans",
          "address": "Bandung",
          "role_id": "65576c984615aad8dc605014" => supplier
        }
      */

      res.status(201).json({
        message: "Account supplier has created",
        any_message: `Create: ${supplier.supplier_username}`,
      });
    } catch (error) {
      console.log(`\nError : ${error}`);
      res.status(400).json({
        message: "Failed to create account supplier",
        error: error.message,
      });
    }
  },
};