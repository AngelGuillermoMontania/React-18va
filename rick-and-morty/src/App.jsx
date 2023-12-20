import Header from "./components/Header";
import Characters from "./components/Characters";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail";

function App() {
  const [tareas, setTareas] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/detail/:pepeHonguito" element={<Detail />} />
          <Route path="/*" element={<h1> NOT FOUND </h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
