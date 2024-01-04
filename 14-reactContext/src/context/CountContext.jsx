import { createContext, useEffect, useState } from "react";

export const CountContext = createContext(); // Creamos el contexto y lo guardamos en la variable

const CountContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("HOLAAA");
  }, []);

  function sumar() {
    setCount(count + 1);
  }

  function restar() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  const data = {
    count, // Es lo mismo que hacer count: count
    sumar,
    restar,
    reset,
  };

  return <CountContext.Provider value={data}>{children}</CountContext.Provider>;
};

export default CountContextProvider;
