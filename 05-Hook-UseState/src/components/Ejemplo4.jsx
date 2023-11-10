import { useState } from "react";

export default function Ejemplo4() {
  const [persona, setPersona] = useState({ nombre: "Guille" });

  function AgregarApellidoProfe() {
    setPersona({ ...persona, apellido: "Montaña" });
  }

  return (
    <>
      <div>
        <p>{persona.nombre}</p>
        <p> {persona.apellido ? persona.apellido : ""}</p>
      </div>
      <div>
        <button onClick={AgregarApellidoProfe}>Agregar Apellido</button>
      </div>
    </>
  );
}
