import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import '../css/bare.css'
const Nav = () => {
  const [stripe, setStripe] = useState(null);

  useEffect(
    () => setStripe(window.Stripe(process.env.STRIPE_PUBLISHABLE_KEY)),
    []
  );

  const goToCheckout = async () => {
    const localCart = localStorage.getItem('cart')
    const res = await fetch(`http://localhost:8081/user/checkout?id=${localCart}`)
    const data = await res.json()

    if(data.id){
      stripe
        .redirectToCheckout({
          sessionId: data.id
        })
        .then(function(result) {
          console.log(result.error.message);
        });
    }
  };
  
  return (
    <div className="nav">
      <h2 className="header">
        <div style={{ display: 'hidden'}}></div>
        <NavLink to="/" className="navTitle">Grails For Sell</NavLink>
        <button onClick={goToCheckout} style={{border: 'none', padding: '5px'}}><FaShoppingCart size={20}/></button>
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

// import React, {useEffect} from 'react'
// import { NavLink } from 'react-router-dom'
// import {FaShoppingCart} from 'react-icons/fa'
// import '../css/bare.css'
// const Nav = () => {
  
//   return (
//     <div className="nav">
//       <h2 className="header">
//         <div style={{ display: 'hidden'}}></div>
//         <NavLink to="/" className="navTitle">Grails For Sell</NavLink>
//         <NavLink to={'/checkout'} className="navTitle"><FaShoppingCart size={20}/></NavLink>
//       </h2>
//       <div className="options">
//         <NavLink to="/vintage" className='navItem'>Vintage</NavLink>
//         <NavLink to="/streetwear" className='navItem'>Streetwear</NavLink>
//         <NavLink to="/hype" className='navItem'>Hype</NavLink>
//       </div>
//     </div>
//   )
// }

// export default Nav
