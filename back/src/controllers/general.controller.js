import { getConnection } from "../database/connection.js";

export const loginAccount = async (req, res) => {
  const { userId } = req.params;
  const pool = await getConnection();
  const result = await pool.request().query(`
        SELECT * FROM users WHERE username = '${userId}'
    `);
  res.json(result);
};

export const registerAccount = async (req, res) => {
  const { username, password, countryCode } = req.body;
  if (!username || !password || !countryCode) {
    res.json({ msg: "please fill all fields" });
  } else {
    const pool = await getConnection();
    const result = await pool.request().query(`
        INSERT INTO users(username, password, country_code, experience)
        VALUES ('${username}', '${password}', '${countryCode.toUpperCase()}', 0)
    `);
    res.json(result);
  }
};
