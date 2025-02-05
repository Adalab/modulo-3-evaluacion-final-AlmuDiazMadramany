import Header from "./Header"
import "../styles/App.scss"
import { matchPath, Route, Routes, useLocation } from "react-router-dom"
import CharacterList from "./CharacterList"
import { useState, useEffect } from "react"
import api from "../services/api"
import Filters from "./Filters"
import localStorage from "../services/localstorage"
import CharacterDetail from "./CharacterDetail"


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

  const { pathname } = useLocation()
  const characterRoute = matchPath("/character/:characterid", pathname)
  const characterIdUrl = characterRoute ? characterRoute.params.characterid : null;
  const characterDetail = characters.find(item=> item.id === characterIdUrl)

  




  return (
    <>
    <Header/>
    
    <main>

    <Routes>
      <Route path="/" element = {
        <>
        <Filters setFilterName ={setFilterName} setSeacrh={setSeacrh} />
        <button>Nueva búsqueda</button>
        <CharacterList data={filtersCharacters}/>
        </>
        }/>

       <Route path="/character/:characterid" element={<CharacterDetail data ={characterDetail}/>}/>

    </Routes>

    </main>
    </>
  
  )
}

export default App
