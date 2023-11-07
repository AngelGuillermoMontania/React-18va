import React from "react";
import "./style.css";

export default function Card({ nombre = "Profe", apellido, edad = 18 }) {
  return (
    <div>
      <h1 className="title">Nombre: {nombre} </h1>
      <h1>Apellido: {apellido} </h1>
      <h1>Edad: {edad} </h1>
    </div>
  );
}
