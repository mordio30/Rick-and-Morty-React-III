import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'
import ContactPage from '../pages/ContactPage'
import { Outlet } from "react-router-dom";
import NavBar from './components/NavBar'



function App() {
  const [favorites, setFavorites] = useState([])

  const isFavorite = (character) => {
    return favorites.includes(character)
  }

  const addFavorite = (character) => {
    if (favorites.length > 3){
      alert("You can only have 4 favorites")
    }
    else{
    setFavorites([...favorites, character])
    }
  }

  const rmFavorite = (character) => {
    setFavorites(favorites.filter((char) => char.id !== character.id))
  }

  useEffect(()=>{
    console.log(favorites)
  }, [favorites])

  return (
    <>
      <NavBar />
      <h1>Rick and Morty</h1>
     
      <Outlet context={{favorites,isFavorite,addFavorite,rmFavorite}}/>
    </>
  )
}

export default App
