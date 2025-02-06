import CharacterCard from "./CharacterCard"
import "../styles/CharacterList.scss"


function CharacterList({data}) {
  let characterHtml;

  if(data.length === 0){
    return (
      <p className="error_message">No se ha encontrado ningún personaje con ese nombre</p>
    );
  } else{
    const dataOrded = [...data].sort ((a, b) => a.name.localeCompare(b.name));


    characterHtml=dataOrded.map((character) => {
   return <CharacterCard key={character.id} info={character}/>;
  });
  }
  

  return (
    <>
    <p className="list_message">Pincha sobre tu personaje para conocer más datos</p>
    <div className="character_list">
      {characterHtml}</div>
      </>
  )
}

export default CharacterList