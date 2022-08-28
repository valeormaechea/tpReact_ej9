import { React, useState, useEffect } from "react";
import CardCita from "./CardCita";
import "./ListaCitas.css";

const ListaCitas = (props) => {
  return (
    <article className="container py-4 bg-light rounded mt-5" id="listaCitas">
      <h1></h1>
      {props.arregloCitas.map((item, posicion) => (
        <CardCita
          key={posicion}
          cita={item}
          borrarCita={props.borrarCita}
          posicion={posicion}
        ></CardCita>
      ))}
    </article>
  );
};

export default ListaCitas;
