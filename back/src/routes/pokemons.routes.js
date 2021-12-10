import { Router } from "express";
import { getPokemons, addPokemon } from "../controllers/pokemons.controller.js";

const router = Router();

router.get("/pokemons", getPokemons);
router.post("/pokemon", addPokemon);

export default router;
