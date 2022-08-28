import { React, useState, useEffect } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import ListaCitas from "./ListaCitas";

const Formulario = () => {
  let citasLocalStorage =
    JSON.parse(localStorage.getItem("citasVeterinaria")) || [];

  const [nombreMascota, setNombreMascota] = useState("");
  const [nombreDuenio, setNombreDuenio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [arregloCitas, setArregloCitas] = useState(citasLocalStorage);

  useEffect(() => {
    localStorage.setItem("citasVeterinaria", JSON.stringify(arregloCitas));
  }, [arregloCitas]);

  const limpiarFormulario = () => {
    setNombreMascota("");
    setFecha("");
    setNombreDuenio("");
    setSintomas("");
    setHora("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaCita = {
      nombreMascota,
      nombreDuenio,
      fecha,
      hora,
      sintomas,
    };
    // Actualizar el arreglo de colores
    setArregloCitas([...arregloCitas, nuevaCita]);
    limpiarFormulario();
  };

  const borrarCita = (posicion) => {
    let arregloModificadoCitas = [];
    for (var i = 0; i < arregloCitas.length; i++) {
      arregloModificadoCitas.push(arregloCitas[i]);
    }

    arregloModificadoCitas.splice(posicion, 1);
    setArregloCitas(arregloModificadoCitas);
  };

  return (
    <article>
      <Card className="mt-5">
        <Card.Header className="p-3">
          <h3 className="my-0">Llene el formulario para crear una cita:</h3>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 column" controlId="formNombreMascota">
              <Form.Label>Nombre de mascota: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Coco"
                required
                onChange={(e) => setNombreMascota(e.target.value)}
                value={nombreMascota}
              />
            </Form.Group>
            <Form.Group className="mb-3 column" controlId="formNombreDuenio">
              <Form.Label>Nombre del dueño: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Juan Perez"
                required
                onChange={(e) => setNombreDuenio(e.target.value)}
                value={nombreDuenio}
              />
            </Form.Group>
            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formFecha">
                <Form.Label>Fecha: </Form.Label>
                <Form.Control
                  type="date"
                  required
                  onChange={(e) => setFecha(e.target.value)}
                  value={fecha}
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formHora">
                <Form.Label>Hora: </Form.Label>
                <Form.Control
                  type="time"
                  required
                  onChange={(e) => setHora(e.target.value)}
                  value={hora}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formSintomas">
              <Form.Label>Sintomas: </Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setSintomas(e.target.value)}
                value={sintomas}
              />
            </Form.Group>
            <Button variant="info" type="submit">
              Agregar nueva cita
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <ListaCitas
        arregloCitas={arregloCitas}
        borrarCita={borrarCita}
      ></ListaCitas>
    </article>
  );
};

export default Formulario;
