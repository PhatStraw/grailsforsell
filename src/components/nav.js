import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav">
      <h2>Grails For Sell</h2>
      <div className="options">
        <Link to="/link">Vintage</Link>
        <Link to="/link">Streetwear</Link>
        <Link to="/link">Hype</Link>
      </div>
    </div>
  )
}

export default Nav
