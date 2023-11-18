require("dotenv").config();
const jwt = require("jsonwebtoken");

const token = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) throw new Error("Invalid header");

    const token = header.split(" ")[1];
    if(!token) throw new Error("There is no token");

    const verify_token = jwt.verify(token, process.env.KEY);
    req.verify_token = verify_token;

    next();

  } catch (error) {
    res.status(400).json({
      message: `Error : ${error.message}`,
      token
    });
  }

};
