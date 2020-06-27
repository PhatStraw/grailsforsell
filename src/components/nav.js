import React from 'react'
import { Link } from 'react-router-dom'
import '../css/bare.css'
const Nav = () => {
  return (
    <div className="nav">
      <h2>Grails For Sell</h2>
      <div className="options">
        <Link to="/vintage" className='navItem'>Vintage</Link>
        <Link to="/streetwear" className='navItem'>Streetwear</Link>
        <Link to="/link" className='navItem'>Hype</Link>
      </div>
    </div>
  )
}

export default Nav
