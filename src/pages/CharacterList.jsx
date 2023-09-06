import { useParams } from "react-router-dom";
import { useState } from "react";
import CharacterDisplay from "./old-CharacterDisplay";

export default function CharacterList(props){




const BlkHeroNames= BlkHeroes.map((oneHero, id)=>{
    
    return(<li>{oneHero.Name}</li>)
})


    return (<div><h1>CharacterList</h1>
    <ul>
        {BlkHeroNames }

    </ul>
    <CharacterDisplay/>


    </div>
    )
}