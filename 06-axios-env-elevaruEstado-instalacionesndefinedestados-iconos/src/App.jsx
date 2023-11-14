import { useState } from "react";
import "./App.css";
import ContainCard1 from "./components/ContainCard1";
import ContainCard2 from "./components/ContainCard2";
import ContainCard3 from "./components/ContainCard3";
import ContainCard4 from "./components/ContainCard4";

function App() {
  const [nombres, setNombres] = useState(["Guille", "Sofi", "Ada"]);

  function agregarNuevo(item) {
    setNombres([...nombres, item]);
  }

  return (
    <>
      <ContainCard4 />
    </>
  );
}

export default App;
