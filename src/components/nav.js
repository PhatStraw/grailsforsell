import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import '../css/bare.css'
const Nav = () => {
  
  return (
    <div className="nav">
      <h2 className="header">
        <div style={{ display: 'hidden'}}></div>
        <NavLink to="/" className="navTitle">Grails For Sell</NavLink>
        <NavLink to="/" className="navTitle"><FaShoppingCart size={20}/></NavLink>
      </h2>
      <div className="options">
        <NavLink to="/vintage" className='navItem'>Vintage</NavLink>
        <NavLink to="/streetwear" className='navItem'>Streetwear</NavLink>
        <NavLink to="/hype" className='navItem'>Hype</NavLink>
      </div>
    </div>
  )
}

export default Nav
