import Header from "./Header"
import "../styles/App.scss"
import { Route, Routes } from "react-router-dom"
import CharacterList from "./CharacterList"
import { useState, useEffect } from "react"
import api from "../services/api"


function App() {

  const [characters, setCharacters] = useState([])
  
  useEffect(()=>{
    api().then((data)=>{setCharacters(data)})


  }, [])

  return (
    <>
    <Header/>
    
    <main>

    <Routes>
      <Route path="/" element = {<CharacterList data={characters}/>}/>
    </Routes>

    </main>
    </>
  
  )
}

export default App
