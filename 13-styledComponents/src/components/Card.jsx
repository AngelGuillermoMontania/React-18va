import { Button, Button2, Button3, SpecialButton3 } from "../styled";

export default function Card() {
  return (
    <div>
      <h1>NOMBRE</h1>
      <Button>Ir al detalle</Button>
      <Button2>Ir al detalle</Button2>
      <Button3 $primary>YO SOY EL BOTON N°3</Button3>
      <SpecialButton3>YO SOY EL BOTON ESPECIAL N°3</SpecialButton3>
    </div>
  );
}
