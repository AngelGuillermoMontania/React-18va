import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CountContext } from "../context/CountContext";

export default function Home() {
  const { count, sumar } = useContext(CountContext);

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={sumar}>SUMAR</button>
      </div>
      <div>
        <Link to="/detail">IR AL DETALLE</Link>
      </div>
    </>
  );
}

// ---------------------------------------------------------------

// function saludo() {
//   return "Hola"
// }

// const variable1 = saludo()
// const variable2 = saludo()
// variable1 = variable1 + " ADA"
// console.log(variable2) // "Hola"
// console.log(variable1) // "Hola Ada"
