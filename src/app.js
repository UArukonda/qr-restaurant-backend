const express = require("express");
const app = express();

const restaurantRoutes = require("./routes/restaurant.routes");

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/restaurants", restaurantRoutes);

module.exports = app;
