import Card1 from "./Card1";
export default function ContainCard1({ array }) {
  return (
    <div>
      {array && array.map((nombre) => <Card1 key={nombre} nombre={nombre} />)}
    </div>
  );
}
