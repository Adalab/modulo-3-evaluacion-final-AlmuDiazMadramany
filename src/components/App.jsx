import Header from "./Header"
import "../styles/App.scss"
import { Route, Routes } from "react-router-dom"
import CharacterList from "./CharacterList"
import { useState, useEffect } from "react"
import api from "../services/api"
import Filters from "./Filters"


function App() {

  const [characters, setCharacters] = useState([])
  const [filterName, setFilterName] = useState("")
  
  useEffect(()=>{
    api().then((data)=>{setCharacters(data)})
  }, [])

  const filtersCharacters = characters.filter((item)=>item.name.toLowerCase().includes(filterName))

  return (
    <>
    <Header/>
    
    <main>

    <Routes>
      <Route path="/" element = {
        <>
        <Filters setFilterName ={setFilterName} />
        <CharacterList data={filtersCharacters}/>
        </>
        }/>
    </Routes>

    </main>
    </>
  
  )
}

export default App
