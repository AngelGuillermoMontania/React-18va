import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Detail() {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <>
      <h1>Detail</h1>
      <h3>El primer parametro es: id {params.id}</h3>
      <h3>El segundo parametro es: cosa {params.cosa}</h3>
      <button onClick={() => navigate("/")}>Ir al Home</button>
    </>
  );
}
