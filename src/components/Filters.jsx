import FilterByHouse from "./FilterByHouse"
import FilterByName from "./FilterByName"


function Filters({setFilterName, setSeacrh,filterName, search}) {
 const handleForm =(ev)=>{
    ev.preventDefault()
  }
  return (
    <form onSubmit={handleForm}>
      
      <FilterByName 
      setFilterName ={setFilterName}
      filterName={filterName}
      search={search}/>
      <FilterByHouse setSeacrh={setSeacrh}/>

    </form>
  )
}

export default Filters