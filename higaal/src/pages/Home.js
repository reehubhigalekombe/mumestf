import React from 'react'
import "../styles/home.css"
import back from "../assets/mum1.jpg"

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${back})`}}>
      <h1>Higal</h1>
    </div>
  )
}

export default Home
