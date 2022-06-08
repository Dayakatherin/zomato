import React from 'react'
import Zomatoapp from './Components/App/Zomatoapp.js'
import Explore from './Components/Explore/Explore'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <Zomatoapp/>
      <Explore/>
      <Footer/>
    </div>
  )
}

export default App

