import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, user } = useAuth0();

  if (user.email === "angelguillermomontania@gmail.com") {
    console.log("ES ADMIN");
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <Logout />
          <img src={user.picture} />
          <p>Usted es: {user.name}</p>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
