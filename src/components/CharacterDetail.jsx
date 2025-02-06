import { Link } from "react-router-dom";
import gryffindorImg from "../images/house_gryffindor.webp";
import hufflepuffImg from "../images/house_hufflepuff.webp";
import ravenclawImg from "../images/house_ravenclaw.webp";
import slytherinImg from "../images/house_slytherin.webp";


function CharacterDetail({data}) {
  const getHouseImage = (house) =>{
      switch (house){
        case "Gryffindor" : return gryffindorImg;
        case "Slytherin" : return slytherinImg;
        case "Hufflepuff" : return hufflepuffImg;
        case "Ravenclaw" : return ravenclawImg;
        default : return `https://placehold.co/600x400?text=Harry+Potter+Character`
      }
    };
  
    const characterImage =data.image
    ? data.image
    : getHouseImage (data.house) ;

  const status = data.status ? "vivo" : "muerto";

  const alternateNames = 
  data.alternate_names && data.alternate_names.length > 0 ? (
    <> Nombres alternativos: {data.alternate_names.join(", ")}</>
  ) : null;




  return (
    <div className="detail">

      <div className="detail_card">
        
        <img 
        className="detail_img"
        src={characterImage} 
        alt="character image" /> 
        

        <div className="detail_data">
        <h2>{data.name}</h2>
        <ul className="detail_characters">
        <li>Estatus: {status}</li>
        <li>Especie: {data.species}</li>
        <li>Género: {data.gender}</li>
        <li>Casa: {data.house}</li>
        <li>{alternateNames}</li>
        </ul>


        </div>



      </div>

      <Link to={`/`}>
      <div className="back_btn">Volver a la búsqueda</div>
      </Link> 

    </div>
  )
}

export default CharacterDetail