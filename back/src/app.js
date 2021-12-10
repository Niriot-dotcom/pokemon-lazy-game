import express from "express";
import config from "./config.js";
import cors from "cors";

// routes
import generalRoutes from "./routes/general.routes.js";
import pokemonsRoutes from "./routes/pokemons.routes.js";
import gameRoutes from "./routes/game.routes.js";

const app = express();

app.set("port", config.PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", function (req, res) {
  res.send(`
        <h1>Corriendo el servidor de pokemon-lazy-game...</h1>
    `);
});

app.use(generalRoutes);
app.use(pokemonsRoutes);
app.use(gameRoutes);

export default app;
