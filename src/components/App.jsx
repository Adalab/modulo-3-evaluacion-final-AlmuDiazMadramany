import Header from "./Header"
import "../styles/App.scss"
import "../styles/Filters.scss"

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

  const [filterGender, setFilterGender] = useState ("")
  

  useEffect(()=>{
    api(search).then((data)=>setCharacters(data))
  }, [search])

  const filtersCharacters = characters
  .filter((item)=>item.name.toLowerCase().includes(filterName))
  .filter((item) =>filterGender ? item.gender === filterGender : true)

  useEffect(()=>{
    localStorage.set("nameSearch", filterName)
  }, [filterName]);

  useEffect(()=>{
    localStorage.set("houseSearch", search)
  }, [search]);

  useEffect(()=>{
    localStorage.set("genderSearch", filterGender)
  }, [filterGender]);

  const { pathname } = useLocation()
  const characterRoute = matchPath("/character/:characterid", pathname)
  const characterIdUrl = characterRoute ? characterRoute.params.characterid : null;
  const characterDetail = characters.find(item=> item.id === characterIdUrl)

  
  const handleReset = ()=>{
    setFilterName("")
    setSeacrh("Gryffindor")
    setFilterGender ("")
  }

  return (
    <>
    <Header/>
    
    <main>

    <Routes>
      <Route path="/" element = {
        <>
        <div className="main_filters">

          <Filters 
          setFilterName ={setFilterName} 
          setSeacrh={setSeacrh} 
          filterName={filterName}
          search={search}
          setFilterGender ={setFilterGender}
          filterGender ={filterGender}
          />

          <button className="reset_btn" onClick={handleReset}>Nueva búsqueda</button>

        

        <CharacterList data={filtersCharacters} />
        </div>
        </>

        }/>

       <Route path="/character/:characterid" element={<CharacterDetail data ={characterDetail}/>}/>

    </Routes>

    </main>
    </>
  
  )
}

export default App
