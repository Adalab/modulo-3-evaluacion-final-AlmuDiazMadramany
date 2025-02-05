

function api() {
  return fetch(`https://hp-api.onrender.com/api/characters/house/gryffindor`)
  .then((resp) => resp.json())
  .then ((data) =>{
    const newArray = data.map((character)=>{
        return{
            id:character.id,
            image:character.image,
            name:character.name,
            species:character.species,
        };
    });
    return newArray;
  });
}

export default api