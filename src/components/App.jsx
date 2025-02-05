import Header from "./Header"
import "../styles/App.scss"
import { Route, Routes } from "react-router-dom"
import CharacterList from "./CharacterList"
import { useState, useEffect } from "react"
import api from "../services/api"
import Filters from "./Filters"
import localStorage from "../services/localstorage"


function App() {

  const [characters, setCharacters] = useState([])
  const [filterName, setFilterName] = useState(localStorage.get("nameSearch", ""))
  const [search, setSeacrh] = useState ("Gryffindor")
  

  useEffect(()=>{
    api(search).then((data)=>setCharacters(data))
  }, [search])

  const filtersCharacters = characters
  .filter((item)=>item.name.toLowerCase().includes(filterName))

  useEffect(()=>{
    localStorage.set("nameSearch", filterName)
  }, [filterName])



  return (
    <>
    <Header/>
    
    <main>

    <Routes>
      <Route path="/" element = {
        <>
        <Filters setFilterName ={setFilterName} setSeacrh={setSeacrh} />
        <CharacterList data={filtersCharacters}/>
        </>
        }/>
    </Routes>

    </main>
    </>
  
  )
}

export default App
