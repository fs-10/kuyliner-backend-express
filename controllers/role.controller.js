const { Role_Bases } = require("../models");

module.exports = {
  role_create: async (req, res) => {
    try {
      const { role_name } = req.body;

      Role_Bases.create({
        role_name,
      });

      // How to use
      // Use this on request body
      /*
        {
          "role_name": "create your role"
        }
      */

      res.status(201).json({
        message: "Create role has successfull",
        role: `Create: ${role_name}`,
      });
    } catch (error) {
      console.log(`\nError : ${error}`);
      res.status(400).json({
        message: "Failed to create role or role not found",
        error: error.message,
      });
    }
  },
  role_update: async (req, res) => {
    try {
      const { role_id } = req.params;
      const new_role_name = req.body.role_name;

      const get_role = await Role_Bases.findByIdAndUpdate(role_id, {
        role_name: new_role_name,
      });

      res.status(201).json({
        message: "Update role has successfull",
        any_message: `Update: ${get_role.role_name} to ${new_role_name}`,
      });
    } catch (error) {
      console.log(`\nError : ${error}`);
      res.status(400).json({
        message: "Failed to update role or role not found",
        error: error.message,
      });
    }
  },
  role_delete: async (req, res) => {
    try {

      const { role_id } = req.params;

      const delete_role = await Role_Bases.findByIdAndDelete(role_id);

      res.status(201).json({
        message: "Delete role has successfull",
        any_message: `Delete: ${delete_role.role_name}`,
      });

    } catch (error) {
      console.log(`\nError : ${error}`);
      res.status(400).json({
        message: "Failed to delete role or role not found",
        error: error.message,
      });
    }
  },
  role_show_all: async (req, res) => {
    try {
      const role = await Role_Bases.find({});

      res.status(200).json({
        message: "Get all role has successfull",
        data: role,
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
