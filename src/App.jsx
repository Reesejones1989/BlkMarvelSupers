import { useState } from 'react'

import './App.css'
import Nav from './components/Nav'
import {Route,Routes} from "react-router-dom"
import CharacterList from './pages/CharacterList'
import About from './pages/About'
import Home from './pages/Home'
import CharacterDisplay from './pages/CharacterDisplay'

function App() {


  return (
    <div className='App'>
    This is the App
    <Nav/>
       <Routes>
       <Route path = "/" element = {<Home/>}/>
       <Route path = "/heroes/:heroName" element = {<CharacterDisplay/>}/>
       <Route path = "/about" element = {<About/>}/>
      </Routes>

      {/* <CharacterList/> */}
    </div>
  )
}

export default App
