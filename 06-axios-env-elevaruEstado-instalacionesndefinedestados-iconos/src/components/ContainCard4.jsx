import React from "react";
import axios from "axios";

export default function ContainCard4() {
  fetch(
    `wwww.fjsafjhasgjfas.com?apiKey=${import.meta.env.VITE_API_WEATHER_KEY}`,
    {
      method: "POST",
      body: {
        nombre: "Guille",
      },
    }
  )
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
    });

  return <div></div>;
}
