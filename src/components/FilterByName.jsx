

function FilterByName({setFilterName,filterName}) {
  const handleInput = (ev) => {
    setFilterName (ev.target.value.toLowerCase())
  }

  return (
    <div>
      <label htmlFor="">Busca por personaje</label>
      <input type="text" onChange={handleInput} value={filterName}/>
    </div>
  )
}

export default FilterByName