import FilterByGender from "./FilterByGender"
import FilterByHouse from "./FilterByHouse"
import FilterByName from "./FilterByName"


function Filters({setFilterName, setSeacrh,filterName, search, setFilterGender, filterGender}) {
 const handleForm =(ev)=>{
    ev.preventDefault()
  }
  return (
    <form onSubmit={handleForm}>
      
      <FilterByName 
      setFilterName ={setFilterName}
      filterName={filterName}
      />
      <FilterByHouse 
      setSeacrh={setSeacrh}
      search={search}/>

      <FilterByGender 
      setFilterGender ={setFilterGender}
      filterGender ={filterGender}
      />

    </form>
  )
}

export default Filters