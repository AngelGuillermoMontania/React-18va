import { useState } from "react";

export default function Ejemplo2() {
  // let count = 0;
  const [count, setCount] = useState(0);

  function Sumar() {
    setCount(count + 1);
  }

  function Restar() {
    setCount(count - 1);
  }

  return (
    <>
      <div>
        <h1>Valor: {count}</h1>
      </div>
      <div>
        <button onClick={Sumar}>SUMAR</button>
        <button onClick={Restar}>RESTAR</button>
      </div>
    </>
  );
}
