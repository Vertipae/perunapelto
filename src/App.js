import React from "react"
import Navbar from "./components/Navbar"
import FrontPage from "./components/FrontPage"
import PotatoVariety from "./components/PotatoVariety"
import Contact from "./components/Contact"
import "./App.css"

function App() {
  return (
    <div className='App'>
      <div className='bg' />
      <Navbar />
      <div className='grid-container'>
        <FrontPage />
        <PotatoVariety />
        <Contact />
      </div>
    </div>
  )
}

export default App
