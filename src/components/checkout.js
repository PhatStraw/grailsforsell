import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/bare.css'
import Shirt from '../assets/shirt.jpeg'
import ItemCover from './itemCover'
const stripePromise = loadStripe('pk_live_51GwCfaFyetTzufDNcpEmglcKUNAVrgJIBTA9Itkxkq5qgDl0fRY5YDSfzs1P7CndIDKbJEiqIqC3WqmeUeTYbDRO00FQxgmv4i');

const Checkout = ({amount, quantity}) => {
  const [items, setItems] = useState()
  useEffect(()=>{
    const getCart = async() => {
      const items = await fetch('http://localhost:8081/')
    }
  })
  const handleClick = async (event) => {
    // Call your backend to create the Checkout Session—see previous step
    const { sessionId } = await fetch('http://localhost:8081/user/checkout',{
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({amount, quantity})
    });
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };
  return (
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
  );
}

export default Checkout
