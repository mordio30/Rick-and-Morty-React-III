import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CharacterCard from "../src/components/CharacterCard"
import CharactersPage from "./CharactersPage"

const ACharacterPage = () =>{
    const {id} = useParams()
    const[character, setCharacter] = useState(null)
    const getCharacterDetails =async()=>{
        let {data} = await axios.get(`https://rickandmortyapi.com/api/character/${id}/`)
        setCharacter(data)
    }

    useEffect(()=>{
        getCharacterDetails()
},[id])


    return(
        <>
            {character? (
            <>
                <h2>Character Name: {character.name}</h2>
                <img src={character.image}/>
                <ul>
                    
                    <li>Character Species: {character.species}</li>
                    <li>Character Gender: {character.gender}</li>
                </ul>
            </>
            ) : null}
        </>
    )
}
    
export default ACharacterPage