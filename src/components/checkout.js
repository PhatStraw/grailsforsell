import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/bare.css'
import Shirt from '../assets/shirt.jpeg'
import ItemCover from './itemCover'
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_live_51GwCfaFyetTzufDNcpEmglcKUNAVrgJIBTA9Itkxkq5qgDl0fRY5YDSfzs1P7CndIDKbJEiqIqC3WqmeUeTYbDRO00FQxgmv4i');

const Checkout = (props) => {
  const [items, setItems] = useState()
  const [price, setPrice] = useState()
  const [quantity, setQuantity] = useState()
  useEffect(()=>{
    const getCart = async() => {
      var localCart = localStorage.getItem('cart');
      let quant = 0
      let pri = 0

      const items = await fetch(`http://localhost:8081/user/cart?id=${localCart}`)
      const newI = await items.json()
      setItems(newI)
      console.log(newI)
    }
    getCart()
  },[])
  const handleClick = async (event) => {
    // Call your backend to create the Checkout Session—see previous step
    const { sessionId } = await fetch('http://localhost:8081/user/checkout',{
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({items: items.doc.items})
    });
    //When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };
  if(items){
    console.log(items)
    return (
    <div>
      {items.doc.items.map((i) => (
      <div>{i}</div>
      
    ))}
      <div>quantity: {quantity}</div>
      <div>price: {price}</div>
      
      <button role="link" onClick={handleClick}>
      Checkout
    </button>
    </div>
    
  );
  }
  return <div>Loading</div>
}

export default Checkout
