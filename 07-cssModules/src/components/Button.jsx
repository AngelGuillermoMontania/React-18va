import React from "react";

export default function Button({ text, primary }) {
  return (
    <button className={primary ? ".buttonPrimary" : ".buttonNoPrimary"}>
      {text}
    </button>
  );
}

/* 

<Button text="Hola" primary={true} />
<Button text="Adios" primary={false} />
*/
