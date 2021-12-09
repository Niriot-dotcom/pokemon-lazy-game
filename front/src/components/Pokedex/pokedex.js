import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Grid from "./grid";

function PokedexPage() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/pokemons")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokemons(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <center>
        <h1>My pokedex!</h1>
      </center>
      <Grid colCount={3}>
        {pokemons.length > 0
          ? pokemons.map((pokemon, index) => {
              return (
                <Card key={index} style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={pokemon.img} />
                  <Card.Body>
                    <Card.Title>{pokemon.name}</Card.Title>
                    <Card.Text></Card.Text>
                    <Button variant="primary">View</Button>
                  </Card.Body>
                </Card>
              );
            })
          : [<p>You don't have any pokemon :c.</p>]}
      </Grid>
    </>
  );
}

export default PokedexPage;
