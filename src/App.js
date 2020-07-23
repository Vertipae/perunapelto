import React from "react"
import Navbar from "./Navbar"
import FrontPage from "./FrontPage"
import PotatoVariety from "./PotatoVariety"
import Contact from "./Contact"
import "./App.css"

function App() {
  return (
    <div className='App'>
      <div className='bg' />
      <Navbar />
      <FrontPage />
      <PotatoVariety />
      <Contact />
    </div>
  )
}

export default App
