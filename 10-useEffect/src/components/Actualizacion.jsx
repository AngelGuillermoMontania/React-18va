import React, { useEffect, useState } from "react";

export default function Actualizacion() {
  const [count, setCount] = useState(0);

  /* Para actualizacion, se coloca una dependencia (Seria como un if) */
  useEffect(() => {
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
    console.log("HOLA" + count);
  }, [count]);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}
