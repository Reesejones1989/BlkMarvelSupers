import { useParams } from "react-router-dom";
import { useState } from "react";
import CharacterDisplay from "./CharacterDisplay";

export default function CharacterList(props){
    const ApiKey = "6c0449139fef768893d53a950434b901"
    const Hash = "a1456f3d7623426b95fae93e26689168"
    const url = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${ApiKey}&hash=${Hash}`
    

    return (<div><h1>CharacterList</h1>
        <CharacterDisplay/>
    </div>
    )
}