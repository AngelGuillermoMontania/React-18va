export default function Card1({ nombre }) {
  const [inp, setInp] = useState();

  return (
    <div>
      <input type="text" onChange={(e) => setInp(e.target.value)} value={inp} />
    </div>
  );
}
