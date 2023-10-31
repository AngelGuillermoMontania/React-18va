import "./App.css";
import Prueba from "./components/Prueba";
import Personal from "./components/Personal";

function App() {
  return (
    <div id="APP">
      <Prueba />
      <Personal />
    </div>
  );
}

export default App;

/* 
Variantes de la funcion

1) La usada arriba

2) export default function App

3) const App = () => {
  return <div>App</div>
}
export default App


*/

/* 

class SerVivo {
  respirar() {
    console.log("estoy respirando")
  }
}

class Humano extends SerVivo {
  vive: true,
}

class Persona extends Humano {
  nombre: "bla bla bla",
  apellido: "cosa"
}

*/
