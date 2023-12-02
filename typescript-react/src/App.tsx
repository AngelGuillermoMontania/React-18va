import "./App.css";
import Header from "./components/Header";

const App = (): JSX.Element => {
  return (
    <>
      <div></div>
    </>
  );
}

export default App;

/* Type ===> Typo */
/* Script ===> de javascript */

// const saludo = "Hola"   // ----> Javascript
// const saludo: string = "Hola" // ----> Typescript

/* Tipos De Datos (primitivos)*/
// string
// number
// boolean
// null
// undefined

// let nose: any = null
// let nose1: any = null
// let nose2: any = null
// let nose3: any = null

// nose = "Hola mundo"

/// NO USAR -------  ANY  -------

/* ------ FUNCIONES -------- */
// function Saludar(nombre: string): string {
//   return `Hola ${nombre}`;
// }

// const despedir: Function = (nombre: string): string => {
//   return `Chau ${nombre}`;
// };

// // Saludar("Adas");
// despedir("Adas");

/* INTERFACES */

interface Titulo {
  titulo: string;
}

interface Persona {
  // DAR UN TIPADO DE DATO A UN OBJETO
  nombre: string;
  apellido: string;
  edad: number;
  titulos: Titulo[];
}



const profe = {
  nombre: "Adas",
  apellido: "Gomez",
  edad: 23,
  titulos: [{titulo: "Profesor"}, {titulo: "Desarrollador"}],
};

const despedir: Function = (obj: Persona): string => {
  return `Chau ${obj.nombre}`;
};

despedir(profe);

const fecha = new Date();