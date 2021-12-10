import { getConnection } from "../database/connection.js";

export const addGame = async (req, res) => {
  const { userId, timestamp, status } = req.body;
  if (!userId || !timestamp || !status) {
    res.json({ msg: "please fill all fields" });
  } else {
    const pool = await getConnection();
    const result = await pool.request().query(`
        INSERT INTO games(user_id, timestamp, status)
        VALUES (${userId}, ${timestamp}, '${status.toUpperCase()}')
    `);
    res.json(result);
  }
};
