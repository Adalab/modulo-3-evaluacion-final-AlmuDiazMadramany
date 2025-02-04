
function CharacterCard({info}) {
  const characterImage =info.image
  ? info.image
  : `https://placehold.co/600x400?text=Harry+Potter+Character`;

 

  return (
    <article className="character_card">
      <img 
      className="character_img"
      src={characterImage} 
      alt="character image" />

      <div className="character_data">
      <h2 className="character_name">{info.name}</h2>
      <h3 className="character_species">{info.species}</h3>
      </div>
    </article>
  )
}

export default CharacterCard