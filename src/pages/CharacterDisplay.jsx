import React from 'react'
import {useParams} from "react-router-dom"
import { useState, useEffect } from 'react'
import "./CharacterDisplay.css"
export default function CharacterDisplay(props) {
  
    const apiKey = "6c0449139fef768893d53a950434b901"
    const params = useParams()
    const heroName = params.heroName

    const url = `https://www.superheroapi.com/api.php/10232758396241709/search/${heroName}`
  
    // console.log(heroName)
  
    const [hero, setHero] = useState(null);

// console.log(coin)
const getHero = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setHero(data);
   };
   useEffect(() => {
    getHero();
    }, []);

    const loaded = () => {
        console.log(hero.results[0]["biography"]["place-of-birth"])
        // console.log(hero.results.filter("Storm"))
        // console.log(setHero)
        // console.log(hero.results[0].powerstats.intelligence)
        return (
          <div className='Card'>
            <h1>
            Name: {hero.results[0].name}
            </h1>
            <h2>
            Real Name: {hero.results[0].biography["full-name"]}
            </h2>
            <h2>
           Place of Birth: {hero.results[0]["biography"]["place-of-birth"]}
            </h2>
        
            <h3>Intelligence: {hero.results[0].powerstats.intelligence}
                <br/> Power: {hero.results[0].powerstats.power}
            </h3>
            <img src={hero.results[0].image.url} alt ={hero.results[0].name}/>
          </div>
        );
      };
  const loading = () => {
     return <h1>Loading...</h1>;
    };

    return hero && hero ? loaded() : loading();
};

