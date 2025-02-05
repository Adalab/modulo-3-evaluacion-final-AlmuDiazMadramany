

function FilterByName({setFilterName}) {
  const handleInput = (ev) => {
    setFilterName (ev.target.value.toLowerCase())
  }

  return (
    <div>
      <label htmlFor="">Busca por personaje</label>
      <input type="text" onChange={handleInput}/>
    </div>
  )
}

export default FilterByName