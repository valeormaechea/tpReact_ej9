import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const CardCita = (props) => {
  return (
    <div className="mx-3 mb-3 col-5">
      <Card>
        <Card.Header>
          <Card.Title>Mascota: {props.cita.nombreMascota}</Card.Title>
          <Card.Subtitle>Dueño: {props.cita.nombreDuenio}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>Fecha: </Col>
            <Col>{props.cita.fecha}</Col>
          </Row>
          <Row>
            <Col>Hora: </Col>
            <Col>{props.cita.hora}</Col>
          </Row>
          <Row>
            <Col>Sintomas: </Col>
            <Col>{props.cita.sintomas}</Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="danger"
            onClick={() => props.borrarCita(props.posicion)}
          >
            Borrar
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardCita;
