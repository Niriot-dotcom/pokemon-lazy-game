import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button, Image } from "react-bootstrap";
import StatusModal from "./statusModal/statusModal";

function GamePage() {
  const [game, setGame] = useState(false);
  const [status, setStatus] = useState("");
  const [statusModal, setStatusModal] = useState(false);
  const [optionGame, setOptionGame] = useState({});
  const [userOptionGame, setUserOptionGame] = useState({});
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    setGame(false);
    setStatusModal(false);
    setOptionGame({});
    setUserOptionGame({});
  }, []);

  const gameOptions = [
    {
      id: 0,
      name: "rock",
      img: "https://icon-library.com/images/rock-icon-png/rock-icon-png-29.jpg",
    },
    {
      id: 1,
      name: "paper",
      img: "https://icons-for-free.com/iconfiles/png/512/file+menu+page+paper+icon-1320165846955357008.png",
    },
    {
      id: 2,
      name: "scissors",
      img: "https://www.pngkey.com/png/full/27-278133_scissors-icon-png-vector-transparent-scissor-icon-png.png",
    },
  ];

  const handleOptionGame = (id) => {
    setBtnDisabled(true);
    let option = Math.floor(Math.random() * 3);
    setOptionGame(gameOptions[option]);
    setUserOptionGame(gameOptions[id]);

    if (id === option) {
      setStatus("TIED");
    } else {
      if (
        (id === 0 && option === 1) ||
        (id === 1 && option === 2) ||
        (id === 2 && option === 0)
      ) {
        setStatus("LOST");
      } else {
        setStatus("WON");
      }
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 2,
        timestamp: Date.now(),
        status: status,
      }),
    };
    fetch("http://localhost:8080/game", requestOptions).catch((err) =>
      console.log(err)
    );
    setStatusModal(true);
    setTimeout(() => {
      setBtnDisabled(false);
    }, 1500);
  };

  return (
    <>
      {game ? (
        <div className="game">
          <Container>
            <Row>
              <Col>
                <Row>
                  {gameOptions.map((opt, index) => {
                    return (
                      <Col>
                        <Button
                          variant="danger"
                          onClick={() => handleOptionGame(opt.id)}
                          disabled={btnDisabled}
                        >
                          <img
                            alt=""
                            src={opt.img}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                          />
                        </Button>
                      </Col>
                    );
                  })}
                </Row>
                <Row>
                  <Col>
                    <Image
                      style={{ maxHeight: "30vh", paddingLeft: "50px" }}
                      src={userOptionGame.img}
                    />
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
                <h1 style={{ paddingLeft: "50px" }}>Computer</h1>
                <Image
                  style={{ maxHeight: "30vh", paddingLeft: "50px" }}
                  src={optionGame.img}
                />
              </Col>
            </Row>
            <Row>
              <Button variant="outline-danger" onClick={() => setGame(false)}>
                Leave
              </Button>
            </Row>
          </Container>
          {statusModal && (
            <StatusModal
              status={status}
              show={statusModal}
              setShow={setStatusModal}
            />
          )}
        </div>
      ) : (
        <Button variant="danger" onClick={() => setGame(true)}>
          Play!
        </Button>
      )}
    </>
  );
}

export default GamePage;
