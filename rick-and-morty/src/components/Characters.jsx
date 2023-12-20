import React, { useState, useEffect } from "react";
import Character from "./Character";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function obtenerPersonajes() {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    obtenerPersonajes();
  }, []);

  return (
    <div className="container">
      <div className="characters">
        {characters &&
          characters.map((item) => (
            <Character
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              species={item.species}
              gender={item.gender}
              status={item.status}
            />
          ))}
      </div>
    </div>
  );
}

/* import React, { Component } from 'react'

export default class characters extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
} */
