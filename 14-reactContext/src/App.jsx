import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import CountContextProvider from "./context/CountContext";

function App() {
  return (
    <BrowserRouter>
      <CountContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </CountContextProvider>
    </BrowserRouter>
  );
}

export default App;
