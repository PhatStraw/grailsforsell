import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/bare.css'
import Shirt from '../assets/shirt.jpeg'
import ItemCover from './itemCover'
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import StripeCheckout from 'react-stripe-checkout'
const fetchCheckoutSession = async ({ quantity, price }) => {
  return fetch('http://localhost:8081/user/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      quantity,
      price,
    }),
  }).then((res) => res.json())
}

const Checkout = (props) => {
  const [items, setItems] = useState([])
  const [price, setPrice] = useState()
  const [quantity, setQuantity] = useState()
  const stripe = useStripe()
  const elements = useElements()
  useEffect(() => {
    let quant = 0
    let pri = 0

    const getCart = async () => {
      var localCart = localStorage.getItem('cart')

      const items = await fetch(
        `http://localhost:8081/user/cart?id=${localCart}`
      )
      const newI = await items.json()

      setItems(newI.doc)

      const total = newI.doc.reduce((pri, i) => pri + i.price, 0)
      console.log('total', total)
      setPrice(total.toFixed(2))
      setQuantity(newI.doc.length)
      console.log('newitem', newI.doc)
    }
    getCart()
  }, [])
  const handleClick = async (event) => {
    event.preventDefault()

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })

    if (!error) {
      const { id } = paymentMethod
      try {
        const { data } = await fetch(
          'http://localhost:8081/user/checkout',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id,
              price,
            }),
          }
        )
        
        const response = await data.json()
      } catch (err) {
        console.log(err)
      }
    }
  }
  if (items) {
    return (
      <div>
        {items.map((i) => (
          <div>{i._id}</div>
        ))}
        <div>quantity: {quantity}</div>
        <div>price: {price}</div>
        <CardElement />
        <button role="link" onClick={handleClick}>
          Checkout
        </button>
      </div>
    )
  }
  return <div>Loading</div>
}

export default Checkout
