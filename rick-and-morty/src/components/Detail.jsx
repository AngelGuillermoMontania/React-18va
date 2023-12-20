import { useEffect, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import { useParams } from "react-router-dom";

export default function Detail() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    async function consultarPersonaje() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${params.pepeHonguito}`
      );
      const data = await response.json();
      setTimeout(() => {
        setCharacter(data);
        setLoading(false);
      }, 2000);
    }
    consultarPersonaje();
  }, []);

  return (
    <div>
      <PacmanLoader
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <h5>DETALLES</h5>
      <h1>{character?.name}</h1>
      <img src={character?.image} />
      <h5>{character?.species}</h5>
      <h5>Origen: {character.origin?.name}</h5>
      <h5>Location: {character.location?.name}</h5>
      <h5></h5>
    </div>
  );
}
