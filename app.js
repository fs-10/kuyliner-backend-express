const express = require("express");

const allRoutes = require("./routes");
const db_connection = require("./config/db_connection");

const app = express();

const PORT = process.env.PORT || 3000;

db_connection.then(() => {
  console.log(`\nConnection: connection to database Success`);
})
.catch(error => {
  console.error(`\nConnection: connection to database Failed\nError: " ${error} "`);
});

app.use(allRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
