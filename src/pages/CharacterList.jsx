import { useParams } from "react-router-dom";
import { useState } from "react";
import CharacterDisplay from "./CharacterDisplay";

export default function CharacterList(props){
const [characters, setCharacters] = useState([]);
const BlkHeroes = [
    {Name: "3-D Man", ID: 1011334},
    {Name: "Black Panther" , ID: 0 },
    {Name: "Blade" , ID: 0 },
    {Name: "Bishop" , ID: 0 },
    {Name: "Falcon" , ID: 0 },
    {Name: "Misty Knight" , ID: 0 },
    {Name: "Patriot" , ID: 0 },
    {Name: "Falcon" , ID: 0 },
    {Name: "War Machine" , ID: 0 },
    {Name: "Miles Morales" , ID: 0 },
    
]

const BlkHeroNames= BlkHeroes.map((oneHero, id)=>{
    // key={id}
    // const {name, ID, bio} = oneHero;
    
    return(<li>{oneHero.Name}</li>)
})


    return (<div><h1>CharacterList</h1>
    <ul>
        {BlkHeroNames }

    </ul>
    <CharacterDisplay/>


        {/* <CharacterDisplay/> */}
    </div>
    )
}