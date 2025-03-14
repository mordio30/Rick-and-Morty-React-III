import { useOutletContext } from "react-router-dom";
import CharacterCard from "../src/components/CharacterCard";

const FavoriteCharacters = () => {
    const{favorites, isFavorite, rmFavorite, addFavorite} = useOutletContext()
    return(
        <>
            <h2>Favorite Characters</h2>
            <div style={{display: "flex", gap: "5vmin", minWidth: '100%', maxWidth: "100%", flexWrap:"wrap"}}>
            {
                favorites.map((character) =>(
                    <CharacterCard key={character.id} character={character} isFavorite={isFavorite} addFavorite={addFavorite} rmFavorite={rmFavorite}/>
                ))
            }
            </div>
        </>
    )
}

export default FavoriteCharacters;