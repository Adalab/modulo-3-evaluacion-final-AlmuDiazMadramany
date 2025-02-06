import "../styles/Filters.scss"

function FilterByGender({setFilterGender, filterGender}) {
  
  const handleSelectGender = (ev) =>{
    setFilterGender(ev.target.value)
  }
    return (
    <div>
        <label className="filter_house_label" htmlFor="">Selecciona el género: </label>
        <select onChange={handleSelectGender} value={filterGender}>
            <option value="">Indiferente</option>
            <option value="female">Mujer</option>
            <option value="male">Hombre</option>
        </select>
    </div>
  )
}

export default FilterByGender