import { Router } from "express";
import { addGame } from "../controllers/game.controller.js";

const router = Router();

router.post("/game", addGame);

export default router;
