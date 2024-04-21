import { Offcanvas } from "react-bootstrap";

function ModalUI(props) {
  return (
    <div>
      <Offcanvas show={props.show} onHide={props.OnHide} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{props.children}</Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default ModalUI;
