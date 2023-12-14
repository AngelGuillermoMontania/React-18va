import { useEffect, useState } from "react";

export default function Montaje() {
  const [data, setData] = useState([]);

  /* Para montaje se deja el array de dependencias vacio */
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <h2>{data.title}</h2>
      <h2>{data.body}</h2>
    </>
  );
}
