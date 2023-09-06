import React from 'react'
import { Link } from "react-router-dom";
import CharacterList from './CharacterList';
import CharacterDisplay from './old-CharacterDisplay';
import BlkHeroes from '../data';

export default function Home() {
    return (
      <div>
        
    {BlkHeroes.map((heroName, i) =>{
        const {name, id,} = heroName;
        return (
        <Link to={`/heroes/${name}`}>
            <h2>{name}</h2>
            <h3>{id}</h3>
        </Link>)
    })}
 
  
      </div>
    )
  }