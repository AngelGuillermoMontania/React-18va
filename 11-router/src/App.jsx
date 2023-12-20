import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/detail" element={<Detail />} /> */}
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/detail/:id" element={<Carrito />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/* Parametros      /:cosa      useParams*/

/* Querys       son con signo de pregunta "?"        */
