require("dotenv").config();
const mongoosee = require('mongoose');

const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/kuyliner_db";
const db_connection = mongoosee.connect(DB_URL);

module.exports = db_connection;