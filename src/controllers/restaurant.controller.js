const Restaurant = require("../models/restaurant.model");

exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.getAll();
    res.json(restaurants);
  } catch (err) {
    next(err);
  }
};
