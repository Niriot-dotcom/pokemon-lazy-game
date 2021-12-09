import React from "react";
import { Alert, Button } from "react-bootstrap";

function StatusModal(props) {
  const handleGameFinished = () => {
    props.setShow(false);
    console.log("status = ");
  };
  return (
    <Alert show={props.show} variant="dark">
      <Alert.Heading>How's it going?!</Alert.Heading>
      <p>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
        fermentum.
      </p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button onClick={handleGameFinished} variant="outline-danger">
          Close me y'all!
        </Button>
      </div>
    </Alert>
  );
}

export default StatusModal;
