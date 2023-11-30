import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <RenderListaCompView />
    </>
  );
}

export default App;

/* Type ===> Typo */
/* Script ===> de javascript */

// const saludo = "Hola"   // ----> Javascript
// const saludo: string = "Hola" // ----> Typescript

/* Tipos De Datos */
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
function Saludar(nombre: string): string {
  return `Hola ${nombre}`;
}

const despedir: Function = (nombre: string): string => {
  return `Chau ${nombre}`;
};

Saludar("Adas");
despedir("Adas");
