import express from "express";
import config from "./config.js";
import pokemonsRoutes from "./routes/pokemons.routes.js";

const app = express();

app.set("port", config.PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(pokemonsRoutes);

export default app;
