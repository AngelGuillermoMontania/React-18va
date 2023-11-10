export default function Ejemplo1() {
  let count = 0;

  function Sumar() {
    count = count + 1;
    console.log(count);
  }

  function Restar() {
    count = count - 1;
    console.log(count);
  }

  return (
    <>
      <div>
        <h1>Valor: {count}</h1>
      </div>
      <div>
        <button onClick={Sumar}>SUMAR</button>
        <button onClick={Restar}>RESTAR</button>
      </div>
    </>
  );
}
