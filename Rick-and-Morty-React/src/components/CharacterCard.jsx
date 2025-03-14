import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import CharactersPage from "../../pages/CharactersPage"

const CharacterCard = ({ character, addFavorite, isFavorite, rmFavorite }) =>{
    const navigate = useNavigate()

    return(
        <>
            <div className="card" key={character.id}>
                <img src={character.image}/>
                <p>{character.name}</p>
                <button onClick={()=>navigate(`/character/${character.id}/`)}>Further Details</button>
               {isFavorite(character)?
                (
                    <button onClick={()=>rmFavorite(character)}>
                        Remove from Favorites
                    </button>
                ) : (
                <button onClick={()=>addFavorite(character)}>
                    Add to Favorites
                </button>
                )}
            </div>     
        </>
    )
}

export default CharacterCard;