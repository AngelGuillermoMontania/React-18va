import React, { useState } from "react";

export default function Card3({ setCount }) {
  const sumar = () => {
    setCount(count + 1); // promise ejecutandose

    // count += 1
    // count = count + 1

    // setCount(count = count + 1)   NO FUNCIONA, ESTA TRATANDO POR DETRAS DE REASIGNAR
    // CON UN IGUAL EL VALOR DEL ESTADO COUNT
  };

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={sumar}>Sumar</button>
      </div>
    </div>
  );
}
