const numero = 5;

function ejemplo() {
  console.log("HOLA");
  return "ADIOS";
}

const prueba = "123";

// DEFAULT
export default {
  ejemplo,
  numero,
  prueba,
  // {
  //   ejemplo: ejemplo,
  //   numero: numero
  // }
};

//NO DEFAULT
export const nombre = "ADA";
export const apellido = "LOVELACE";

/* 

TENEMOS DOS FORMAS DE EXPORTAR E IMPORTAR

1) POR DEFAULT
Ejemplo: export default numero;

Exporta UN SOLO dato, para darlo a conocer a los demas archivos.
El export por default puede exportar algo ya declarado por fuera


2) NO, POR DEFAULT. FORMA COMUN

Exporta UNO O MAS DATOS, para darlos a conocer a los demas archivos
El export no default NO puede exportar algo declarado fuera


*/

/* 

// FORMA ANTIGUA O UTILIZADA EN BACKEND
module.exports = numero

*/
