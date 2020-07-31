import React from "react"
import Navbar from "./components/Navbar"
import FrontPage from "./components/FrontPage"
import PotatoVariety from "./components/PotatoVariety"
import Contact from "./components/Contact"
import "./App.css"
import Footer from "./components/Footer"

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
      <Footer />
    </div>
  )
}

export default App
