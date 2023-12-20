import { useNavigate } from "react-router-dom";

export default function Character({
  id,
  image,
  name,
  species,
  status,
  gender,
}) {
  const navigate = useNavigate();

  return (
    <div className="box" key={id} onClick={() => navigate(`/detail/${id}`)}>
      <img src={image} alt={name} />
      <div className="character">
        <h3 className="name">{name}</h3>
        <p className="specie">{species}</p>
        <p className="status">{status}</p>
        <p className="gender">{gender}</p>
      </div>
    </div>
  );
}
