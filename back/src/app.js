import express from "express";
import config from "./config.js";
import pokemonsRoutes from "./routes/pokemons.routes.js";
import cors from "cors";

const app = express();

app.set("port", config.PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(pokemonsRoutes);

export default app;
