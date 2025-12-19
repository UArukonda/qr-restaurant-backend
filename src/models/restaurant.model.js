const pool = require("../db/pool");

exports.getAll = async () => {
  const result = await pool.query(
    "SELECT id, name FROM restaurants ORDER BY name"
  );
  return result.rows;
};
