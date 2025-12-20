const pool = require("../db/pool");

exports.getByRestaurantId = async (restaurantId) => {
  const result = pool.query(
    `
        SELECT id, name, price
        FROM menu_items
        WHERE restaurantId = $1
        ORDER BY name`,
    [restaurantId]
  );

  return result.rows;
};
