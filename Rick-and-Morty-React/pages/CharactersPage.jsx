import { useEffect, useState } from "react"
import axios from "axios"

const CharactersPage = () =>{

    const[characters, setCharacters] = useState([]) //its going to be set to an array of objects

    const getCharacters = async () =>{
        
        let { data } = await axios.get(`https://rickandmortyapi.com/api/character`)
        console.log(data)
        setCharacters(data.results)
    }

    useEffect(()=>{
        console.log(characters)
    }, [characters])

    useEffect(()=>{
        getCharacters()
    }, [])

    return(
        <>
        <h2>Characters Rick and Morty</h2>
        <div style={{display: "flex", gap: "5vmin", minWidth: '100%', maxWidth: "100%", flexWrap:"wrap"}}>
            {characters.map((character)=>(
                <div className="card" key={character.id}>
                    <img src={character.image}/>
                    <p>{character.name}</p>
                </div>
            ))}

        </div>
        </>
    )
}

export default CharactersPage;