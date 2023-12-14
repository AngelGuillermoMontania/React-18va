import { useState } from "react";
import "./App.css";
import Actualizacion from "./components/Actualizacion.jsx";
import Desmontaje from "./components/Desmontaje.jsx";
import Montaje from "./components/Montaje.jsx";

function App() {
  const [mostrarDesmontaje, setMostrarDesmontaje] = useState(true);

  return (
    <>
      {/* <Montaje /> */}
      {/* <Actualizacion /> */}
      <button onClick={() => setMostrarDesmontaje(!mostrarDesmontaje)}>
        {mostrarDesmontaje}
      </button>
      {mostrarDesmontaje ? <Desmontaje /> : <Montaje />}
    </>
  );
}

export default App;

/* 

useEffect(funcion, [dependencias])

*/
