

function FilterByName({setFilterName,filterName}) {
  const handleInput = (ev) => {
    setFilterName (ev.target.value.toLowerCase())
  }

  return (
    <div className="filter_name">
      <label className="filter_name_label" htmlFor="">Busca por personaje:</label>
      <input className="filter_name_input" type="text" onChange={handleInput} value={filterName}/>
    </div>
  )
}

export default FilterByName