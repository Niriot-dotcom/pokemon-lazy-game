import { getConnection } from "../database/connection.js";

export const getPokemons = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query("SELECT * FROM users");
  res.json(result.recordset);
};

export const addPokemon = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query("SELECT * FROM users");
  const { status } = req.body;
  console.log(status);
  res.json("new game");
};
