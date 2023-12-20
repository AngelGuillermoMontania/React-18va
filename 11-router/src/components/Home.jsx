import React from "react";
import { Link } from "react-router-dom";

export default function Home({ id }) {
  return (
    <>
      <h1>Home</h1>
      <Link to={`/detail/${id}`}>Ir a detalle</Link>
    </>
  );
}
