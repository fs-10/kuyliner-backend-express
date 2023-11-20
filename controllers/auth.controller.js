const { Users, Suppliers, Role_Bases } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

module.exports = {
  sign_in: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await Users.findOne({ email: email });
      const supplier = await Suppliers.findOne({ email: email });

      if (!user && !supplier) {
        res.status(404).json({
          message: `Email ${email} not found`,
        });
      } else {
        if (user != null) {
          if (!bcrypt.compareSync(password, user.password)) {
            res.status(401).json({
              message: "Wrong password",
            });
          } else {
            const [role_user] = await Users.find({
              role_id: user.role_id,
            }).populate("role_id");

            const user_token = jwt.sign(
              {
                id: user._id,
                email: user.email,
                role: role_user.role_id.role_name,
              },
              process.env.KEY
            );

            const decode = jwt.decode(user_token);
            console.log(decode);

            res.status(200).json({
              message: `Login success`,
              token: user_token,
            });
          }
        } else {
          if (!bcrypt.compareSync(password, supplier.password)) {
            res.status(401).json({
              message: "Wrong password",
            });
          } else {
            const [role_supplier] = await Suppliers.find({
              role_id: supplier.role_id,
            }).populate("role_id");

            const supplier_token = jwt.sign(
              { id: supplier._id, email: supplier.email, role: role_supplier.role_id.role_name },
              process.env.KEY
            );

            res.status(200).json({
              message: `Login as a Supplier, success`,
              token: supplier_token,
            });
          }
        }
      }
    } catch (error) {
      console.log(`\nError : ${error}`);
      res.status(500).json({
        message: "Server error",
        error: error.message,
      });
    }
  },
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
      const {
        supplier_username,
        email,
        password,
        first_name,
        address,
        role_id,
      } = req.body;

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
