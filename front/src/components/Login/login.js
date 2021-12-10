import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import pokemonIcon from "../../images/pokemonIcon.png";

function LoginPage() {
  return (
    <div className="login-background">
      <Container>
        <Row className="mt-5 text-center">
          <Col>
            <h1>Log in to play the most fun (and a little lazy) game!</h1>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={5} md={6} sm={12} className="bg-light p-5 m-auto shadow-sm">
            <img className="icon-pokemon" alt="icon" src={pokemonIcon} />
            <div class="floating-fake">
              <label class="label-ff col-form-label-sm">Username</label>
              <input
                type="text"
                class="input-ff form-control-sm"
                name="ansprechpartner"
              />

              <label class="label-ff col-form-label-sm">Password</label>
              <input
                type="text"
                class="input-ff form-control-sm"
                name="ansprechpartner"
              />
            </div>
            <div className="d-grid" style={{ marginTop: "20px" }}>
              <Button variant="danger">Log in</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;
