import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import PokemonCard from "../Pokemon/PokemonCard/pokemonCard";
import Grid from "./grid";

function PokedexPage() {
  const [pokemons, setPokemons] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/pokemons")
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClickView = (id) => {
    setPokemon(id);
    setShowModal(true);
  };

  return (
    <>
      <center>
        <h1 style={{ paddingBottom: "10px" }}>My pokedex!</h1>
      </center>

      <Grid colCount={3}>
        {pokemons.length > 0
          ? pokemons.map((pokemon, index) => {
              return (
                <>
                  <Card key={index} style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={pokemon.img} />
                    <Card.Body>
                      <Card.Title>{pokemon.name}</Card.Title>
                      <Button
                        variant="danger"
                        onClick={() => handleClickView(pokemon)}
                      >
                        View
                      </Button>
                    </Card.Body>
                  </Card>
                </>
              );
            })
          : [<p>You don't have any pokemon :c.</p>]}
      </Grid>
      <PokemonCard p={pokemon} show={showModal} setShow={setShowModal} />
    </>
  );
}

export default PokedexPage;
