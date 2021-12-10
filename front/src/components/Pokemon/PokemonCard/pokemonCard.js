import React from "react";
import {
  Modal,
  Button,
  Image,
  Container,
  Col,
  Row,
  Card,
} from "react-bootstrap";

function PokemonCard(props) {
  return (
    <Modal
      show={props.show}
      onHide={() => props.setShow(false)}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title>{props.p.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col md="auto">
              <Image style={{ maxHeight: "20vh" }} src={props.p.img} />
            </Col>
            <Col md="auto">
              <Card style={{ width: "15rem" }}>
                <Card.Header>
                  <Card.Title>
                    <strong>Characteristics</strong>
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <Container>
                      <Row>
                        <Col>
                          <h6>Weight:</h6>
                        </Col>
                        <Col>{props.p.weight}</Col>
                        <Col>
                          <h6>Height:</h6>
                        </Col>
                        <Col>{props.p.height}</Col>
                        <Col>
                          <h6>Types:</h6>
                        </Col>
                        <Col>{props.p.types}</Col>
                        <Col>
                          <h6>Abilities:</h6>
                        </Col>
                        <Col>{props.p.abilities}</Col>
                      </Row>
                    </Container>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="danger"
          onClick={() => {
            props.setShow(false);
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PokemonCard;
