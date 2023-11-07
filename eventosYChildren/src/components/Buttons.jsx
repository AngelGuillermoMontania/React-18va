import React from "react";

export default function Buttons() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    // ENVIAR INFORMACION
    //TRABAJAR CON LA INFORMACION
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="button" onClick={() => alert("Hola")}>
        Hace click aqui!
      </button>
      <button type="submit">Segundo boton</button>
      <p id="parrafo">SOY UNA ETIQUETA P</p>
    </form>
  );
}

/* 
EJEMPLO DE EVENTO CON JS VANILA
const p = document.querySelector("#p")
p.addEventListener("click", (event) => {
  console.log("HOLA")
})



/* 

//DECLARACION
function sumar() {
  return 1 + 1
}

// EJECUCION
sumar()
 */
