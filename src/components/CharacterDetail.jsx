import { Link } from "react-router-dom";


function CharacterDetail({data}) {
  const characterImage =data.image
  ? data.image
  : `https://placehold.co/600x400?text=Harry+Potter+Character`;

  const status = data.status ? "vivo" : "muerto";

  return (
    <div>
       <Link to={`/`}>
      <div>volver a la búsqueda</div>
      </Link> 

      <div>
      <img 
      className="character_img"
      src={characterImage} 
      alt="character image" /> 
      </div>

      <div>
      <h2>{data.name}</h2>
      <p>Estatus:{status}</p>
      <p>Especie:{data.species}</p>
      <p>Género:{data.gender}</p>
      <p>Casa:{data.house}</p>
      </div>

    </div>
  )
}

export default CharacterDetail