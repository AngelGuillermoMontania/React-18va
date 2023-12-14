import React, { useEffect, useState } from "react";

export default function Desmontaje() {
  const [date, setDate] = useState(new Date());

  /* PARA EL DESMONTAJE, SE USA UN RETURN DE UNA FUNCION */
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("ENTRE INTERVAL");
      setDate(new Date());
    }, 1000);
    return () => {
      console.log("DESMONTAJE");
      clearInterval(timer);
    };
  }, []);

  return <div>{date.toString()}</div>;
}
