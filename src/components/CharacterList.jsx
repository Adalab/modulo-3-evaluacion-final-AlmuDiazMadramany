import CharacterCard from "./CharacterCard"


function CharacterList({data}) {
  let characterHtml;

  if(data.length === 0){
    return (
      <p>No se ha encontrado ningún personaje con ese nombre</p>
    );
  } else{
    characterHtml=data.map((character) => {
   return <CharacterCard key={character.id} info={character}/>;
  });
  }
  

  return (
    <div className="character_list">{characterHtml}</div>
  )
}

export default CharacterList