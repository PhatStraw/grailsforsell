import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/bare.css'

const Home = () => {
  return (
    <div className="homeWrapper">
      <div className='bodyWrapper'>
        <div className="nav">
          <h2>Grails For Sell</h2>
          <div className="options">
            <Link to="/link">Vintage</Link>
            <Link to="/link">Streetwear</Link>
            <Link to="/link">Hype</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
