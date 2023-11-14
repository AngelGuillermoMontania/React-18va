import { useState } from "react";
import Card2 from "./Card2";

export default function ContainCard2({ array }) {
  const [apellido, setApellido] = useState("");

  return (
    <div>
      {array && array.map((nombre) => <Card2 key={nombre} nombre={nombre} />)}
      <input
        type="text"
        onChange={(e) => setApellido(e.target.value)}
        value={apellido}
      />
      <button onClick={() => [...array, apellido]}>Agregar</button>
    </div>
  );
}
