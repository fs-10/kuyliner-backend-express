const jwt = require("jsonwebtoken");
require("dotenv").config();

function has_role(roles) {
  return (req, res, next) => {
    try {
      const { authorization } = req.headers;
      const token = authorization.split(" ")[1];
      const { role } = jwt.decode(token);

      if (roles !== role) {
        res.status(401).json({
          message: "Can't access this features",
        });
      } else {
        next();
      }
    } catch (error) {
      console.log(`Error: ${error}`);
      res.status(400).json({
        messsage: `Error: ${error.message}`,
      });
    }
  };
}

module.exports = has_role;
