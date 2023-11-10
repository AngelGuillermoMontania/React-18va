import { useState } from "react";

export default function Ejemplo3() {
  const [nombres, setNombres] = useState(["Guille"]);

  function AgregarNombreSofi() {
    setNombres([...nombres, "Sofi"]);
  }

  return (
    <>
      <div>
        {nombres.map((nombre) => (
          <h1>{nombre}</h1>
        ))}
      </div>
      <div>
        <button onClick={AgregarNombreSofi}>Agregar Sofi</button>
      </div>
    </>
  );
}
