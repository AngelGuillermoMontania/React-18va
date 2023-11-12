import { useEffect, useState } from "react";

export default function Ejemplo6({ searchCity }) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Mendoza&units=metric&lang=es&appid=e485382dd61bc4ac8fa0e4b427d20e85`
    )
      .then((r) => r.json())
      .then((recurso) => {
        const ciudad = {
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          humidity: recurso.main.humidity,
          feels_like: recurso.main.feels_like,
          description: recurso.weather[0].description,
          clouds: recurso.clouds.all,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
        };
        console.log(ciudad);
        setCities([...cities, ciudad]);
      });
  }, []);

  return (
    <form
      onSubmit={
        (e) => e.preventDefault()
        // fetch(dshjagdas.com?nombre=${nombre})
      }
    ></form>
  );
}
