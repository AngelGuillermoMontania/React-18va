import { useState } from "react";
import { FaBeer } from "react-icons/fa";
import { TfiAndroid } from "react-icons/tfi";
import { VscColorMode } from "react-icons/vsc";

export default function Ejemplo5({ count, setCount }) {
  function sumar() {
    setCount(count + 1);
  }

  function restar() {
    setCount(count - 1);
  }

  return (
    <>
      <div>
        <span style={{ color: "red" }}>
          Hola
          <TfiAndroid
            color="blue"
            size={45}
            onClick={() => console.log("Hola")}
          />
        </span>
        <FaBeer />
        <VscColorMode />
        <h1>Valor: {count}</h1>
      </div>
      <div>
        <button onClick={sumar}>SUMAR</button>
        <button onClick={restar}>RESTAR</button>
      </div>
    </>
  );
}
