import { Link } from "react-router-dom"

import gryffindorImg from "../images/house_gryffindor.webp";
import hufflepuffImg from "../images/house_hufflepuff.webp";
import ravenclawImg from "../images/house_ravenclaw.webp";
import slytherinImg from "../images/house_slytherin.webp";



function CharacterCard({info}) {

  const getHouseImage = (house) =>{
    switch (house){
      case "Gryffindor" : return gryffindorImg;
      case "Slytherin" : return slytherinImg;
      case "Hufflepuff" : return hufflepuffImg;
      case "Ravenclaw" : return ravenclawImg;
      default : return `https://placehold.co/600x400?text=Harry+Potter+Character`
    }
  };

  const characterImage =info.image
  ? info.image
  : getHouseImage (info.house) ;

 

  return (
    <article className="character_card">
      <Link to={`/character/${info.id}`}>
      <img 
      className="character_img"
      src={characterImage} 
      alt="character image" />

      <div className="character_data">
      <h2 className="character_name">{info.name}</h2>
      <h3 className="character_species">{info.species}</h3>
      </div>
      </Link>
    </article>
  )
}

export default CharacterCard