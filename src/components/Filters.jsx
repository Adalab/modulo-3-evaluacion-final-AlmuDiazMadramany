import FilterByHouse from "./FilterByHouse"
import FilterByName from "./FilterByName"


function Filters({setFilterName, setSeacrh,}) {
 const handleForm =(ev)=>{
    ev.preventDefault()
  }
  return (
    <form onSubmit={handleForm}>
      
      <FilterByName setFilterName ={setFilterName}/>
      <FilterByHouse setSeacrh={setSeacrh}/>

    </form>
  )
}

export default Filters