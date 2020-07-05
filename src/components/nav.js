import React from 'react'
import { Link } from 'react-router-dom'
import '../css/bare.css'
const Nav = () => {
  const onHover = (e) => {
    e.target.style.underline = "1px solid black"
  } 
  return (
    <div className="nav">
      <h2>Grails For Sell</h2>
      <div className="options">
        <Link to="/vintage" onHover={onHover} className='navItem'>Vintage</Link>
        <Link to="/streetwear" className='navItem'>Streetwear</Link>
        <Link to="/hype" className='navItem'>Hype</Link>
      </div>
    </div>
  )
}

export default Nav
