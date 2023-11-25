const { Users } = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

module.exports = {
  sign_in: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await Users.findOne({ email: email }).populate("role_id");

      if (!user) {
        res.status(404).json({
          message: `Email not found`,
        });
      } else {
        if (!bcrypt.compareSync(password, user.password)) {
          res.status(401).json({
            message: "Wrong password",
          });
        } else {
          const user_token = jwt.sign(
            {
              id: user.id,
              email: user.email,
              role: user.role_id.role_name,
            },
            process.env.KEY
          );

          res.status(200).json({
            message: `Login success`,
            token: user_token,
          });
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
  sign_up: async (req, res) => {
    try {
      const { username, email, password, first_name } = req.body;

      let { last_name, location, profile_image } = req.body;

      const find_user = await Users.findOne({ email: email });

      if (find_user != null) {
        if (find_user.email === email) {
          res.status(400).json({
            message: "Email already in use",
          });
        }
      } else {
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
          role_id: "6557612983f852d918d7cc91",
        });

        res.status(201).json({
          message: "Account has created",
          any_message: `Create: ${user.username}`,
        });
      }
    } catch (error) {
      console.log(`\nError : ${error}`);
      res.status(400).json({
        message: "Failed to create account",
        error: error.message,
      });
    }
  },
};
