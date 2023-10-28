import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// createRoot --> crea un nuevo árbol de elementos React y lo monta en el contenedor DOM especificado.
// render --->  Renderiza un elemento React en el DOM.

// StrictMode ---> StrictMode es una herramienta para detectar potenciales problemas en una aplicación de React.
