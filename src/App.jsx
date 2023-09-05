import { useState } from 'react'

import './App.css'
import Nav from './components/Nav'
import {Route,Routes} from "react-router-dom"
import CharacterList from './pages/CharacterList'

function App() {
const ApiKey = "6c0449139fef768893d53a950434b901"


  return (
    <div className='App'>
    This is the App
    <Nav/>
      {/* <Nav/>
       <Routes>
       <Route path = "/" element = {<CharacterList/>}/>
       <Route path = "/about" element = {<About/>}/>
      </Routes> */}

      <CharacterList/>
    </div>
  )
}

export default App
