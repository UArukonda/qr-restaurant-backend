const express = require("express");
const app = express();

const restaurantRoutes = require("./routes/restaurant.routes");
const errorHandler = require("./middleware/error.middleware");

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/restaurants", restaurantRoutes);
app.use(errorHandler);

module.exports = app;
