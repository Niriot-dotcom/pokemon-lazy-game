import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button, Image } from "react-bootstrap";
import StatusModal from "./statusModal/statusModal";

function GamePage() {
  const [game, setGame] = useState(false);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setStatus(false);
  }, []);
  return (
    <>
      {game ? (
        <div className="game">
          <Container>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <Button variant="danger" onClick={() => setStatus(true)}>
                      <img
                        alt=""
                        src="https://icon-library.com/images/rock-icon-png/rock-icon-png-29.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                      />
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="danger" onClick={() => setStatus(true)}>
                      <img
                        alt=""
                        src="https://icons-for-free.com/iconfiles/png/512/file+menu+page+paper+icon-1320165846955357008.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                      />
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="danger" onClick={() => setStatus(true)}>
                      <img
                        alt=""
                        src="https://www.pngkey.com/png/full/27-278133_scissors-icon-png-vector-transparent-scissor-icon-png.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                      />
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Image
                  style={{ maxHeight: "50vh", paddingLeft: "50px" }}
                  src="http://cdn.onlinewebfonts.com/svg/img_418591.png"
                ></Image>
              </Col>
              <Col>
                <h1>Computer</h1>
              </Col>
            </Row>
            <Row>
              <Button variant="outline-danger" onClick={() => setGame(false)}>
                Leave
              </Button>
            </Row>
          </Container>
          {status && <StatusModal show={status} setShow={setStatus} />}
        </div>
      ) : (
        <button onClick={() => setGame(true)}>Play!</button>
      )}
    </>
  );
}

export default GamePage;
