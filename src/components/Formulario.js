import React from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import ListaCitas from "./ListaCitas";

const Formulario = () => {
  return (
    <article>
      <Card className="mt-5">
        <Card.Header className="p-3">
          <h3 className="my-0">Llene el formulario para crear una cita:</h3>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3 column" controlId="formNombreMascota">
              <Form.Label>Nombre de mascota: </Form.Label>
              <Form.Control type="text" placeholder="Coco" />
            </Form.Group>
            <Form.Group className="mb-3 column" controlId="formNombreDuenio">
              <Form.Label>Nombre del dueño: </Form.Label>
              <Form.Control type="text" placeholder="Juan Perez" />
            </Form.Group>
            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formFecha">
                <Form.Label>Fecha: </Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formHora">
                <Form.Label>Hora: </Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formSintomas">
              <Form.Label>Sintomas: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Button variant="info" type="submit">
              Agregar nueva cita
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <ListaCitas></ListaCitas>
    </article>
  );
};

export default Formulario;
