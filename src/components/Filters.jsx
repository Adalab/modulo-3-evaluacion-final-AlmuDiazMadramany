import FilterByHouse from "./FilterByHouse"
import FilterByName from "./FilterByName"


function Filters({setFilterName}) {
 const handleForm =(ev)=>{
    ev.preventDefault()
  }
  return (
    <form onSubmit={handleForm}>
      
      <FilterByName setFilterName ={setFilterName}/>
      <FilterByHouse/>

    </form>
  )
}

export default Filters