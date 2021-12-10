import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

function StatusModal(props) {
  let variant =
    props.status === "WON"
      ? "success"
      : props.status === "TIED"
      ? "warning"
      : "danger";

  return (
    <ToastContainer position="bottom-end" className="p-12">
      <Toast
        onClose={() => props.setShow(false)}
        show={props.show}
        delay={1500}
        autohide
        animation
        bg={variant}
      >
        <Toast.Body>
          <strong className="me-auto">
            <h3>{props.status}</h3>
          </strong>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default StatusModal;
