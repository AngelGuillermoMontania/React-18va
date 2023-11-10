import { useState } from "react";

export default function Ejemplo6({ searchCity }) {
  const [nombre, setNombre] = useState("");

  function cambiarNombre(e) {
    setNombre(e.target.value);
  }

  return (
    <form
      onSubmit={
        (e) => e.preventDefault()
        // fetch(dshjagdas.com?nombre=${nombre})
      }
    >
      <input
        type="text"
        placeholder="Escriba aqui su nombre"
        value={nombre}
        onChange={cambiarNombre}
      />
      <button type="submit">Crear</button>
    </form>
  );
}
