
function FilterByHouse({setSeacrh, search}) {
  const handleSelect = (ev) =>{
    setSeacrh(ev.target.value)

  }
  
  return (
    
    <div className="filter_house">
      <label className="filter_house_label" htmlFor="">Busca por casa:</label>
      <select onChange={handleSelect} value={search}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        
      </select>


    </div>
  )
}

export default FilterByHouse