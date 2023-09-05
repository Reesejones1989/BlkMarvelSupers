import {useParams} from "react-router-dom"
import { useState, useEffect } from "react";

function CharacterDisplay (){
    const ApiKey = "6c0449139fef768893d53a950434b901"
    const Hash = "a1456f3d7623426b95fae93e26689168"
    const url = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${ApiKey}&hash=${Hash}`
    const params = useParams()
    const heroName = params.heroName;

    const [hero, setHero] = useState("null")

    const getHero = async () =>{
        const response = await fetch (url);
        const data = await response.json();
        setHero(data);};
        useEffect(() => {getHero()}, []);

// console.log(hero.data.results[0].name) //Prints 3-D Man
// console.log(hero.data.results[0].name)
// hero.map((heroName, i)=>{
//     key={i}
//     return <div>{heroName.data.results[i].name}</div>
// })

        const loaded = () => {
            // console.log(hero)
            return (
              <div>
                <h1>
                Name: {hero[0].name}
                </h1>
                <h2>
                Image: 
                </h2>
                <h2> Bio: {hero[0].bio} </h2>
                <h2>First Appearance: {hero[0].fp}</h2>
              </div>
            );
          };

    
    return (<div>
        {/* <img src={hero[0].image}/> */}
        <h1>Character Image</h1>
        <h2>Character Name</h2>
        
        <h2>First Appearance</h2>
        <h3>Character Bio</h3>
        </div>
    )
}

export default CharacterDisplay