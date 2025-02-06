

function api(search) {
  return fetch(`https://hp-api.onrender.com/api/characters/house/${search}`)
  .then((resp) => resp.json())
  .then ((data) =>{
    const newArray = data.map((character)=>{
        return{
            id:character.id,
            image:character.image,
            name:character.name,
            species:character.species,
            status:character.alive,
            gender:character.gender,
            house:character.house,
            alternate_names:character.alternate_names
        };
    });
    return newArray;
  });
}

export default api