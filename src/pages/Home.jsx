import React from 'react'
import { Link } from "react-router-dom";
import BlkHeroes from '../data';
import Villains from '../dataVillains';
import "./Home.css"

export default function Home() {
    return (
        
      <div className='Heroes'>
        <div> <h1>Heroes </h1> </div> 
    {BlkHeroes.map((heroName, i) =>{
        const {name, id,} = heroName;
        return (
        <Link to={`/heroes/${name}`}>
            <h2>{name}</h2>
            <h3>{id}</h3>
        </Link>)
    })} 
      


      <div className='Villains'>
      <div> <h1>Villains </h1> </div> 
  {Villains.map((evil, i) =>{
      const {name, id,} = evil;
      return (
      <Link to={`/heroes/${name}`}>
          <h2>{name}</h2>
          <h3>{id}</h3>
      </Link>)
  })} 
    </div>



</div>



    )
  }