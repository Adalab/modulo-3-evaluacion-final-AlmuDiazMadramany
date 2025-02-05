
function FilterByHouse({setSeacrh}) {
  const handleSelect = (ev) =>{
    setSeacrh(ev.target.value)

  }
  
  return (
    
    <div>
      <label htmlFor="">Busca por casa</label>
      <select name="" id="" onChange={handleSelect}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        
      </select>


    </div>
  )
}

export default FilterByHouse