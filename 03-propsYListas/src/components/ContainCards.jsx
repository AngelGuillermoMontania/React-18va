import React from "react";
import Card from "./Card";
import "./style2.css";

export default function ContainCards() {
  const personas = [
    {
      id: 1,
      nombre: "Guille",
      apellido: "Montaña",
      edad: 31,
    },
    {
      id: 2,
      nombre: "Sharime",
      apellido: "Cahuas",
      edad: 42,
    },
    {
      id: 3,
      nombre: "Coco",
      apellido: "Talledo",
      edad: 28,
    },
  ];

  return (
    <>
      {personas.map((persona) => (
        <Card
          key={persona.id}
          nombre={persona.nombre}
          apellido={persona.apellido}
          edad={persona.edad}
        />
      ))}
    </>
  );
}
