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
  const [user, setUser] = useState(null)

  useEffect(()=>{
    console.log(user)
  }, [user])

  return (
    <>
      <NavBar />
      <h1>Rick and Morty</h1>
     
      <Outlet />
    </>
  )
}

export default App
