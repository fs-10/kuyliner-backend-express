const express = require("express");
const allRoutes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(allRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
