import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavbarC() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Pokemon Lazy Game
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>

            <Nav.Link href="/pokedex">Pokedex</Nav.Link>
            <Nav.Link href="/game">Game</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarC;
