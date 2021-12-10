import { Router } from "express";
import {
  loginAccount,
  registerAccount,
} from "../controllers/general.controller.js";

const router = Router();

router.get("/login/:userId", loginAccount);
router.post("/register", registerAccount);

export default router;
