import React, { useState, useEffect } from 'react'
import '../css/bare.css'
import Shirt from '../assets/shirt.jpeg'
import { useAlert } from 'react-alert'
import { FaShoppingCart } from 'react-icons/fa'

const Item = (props) => {
  const alert = useAlert()

  const onClick = async (e) => {
    e.preventDefault()
    try {
      var localCart = localStorage.getItem('cart')
      const cart = await fetch(
        `http://localhost:8081/user/additem?id=${localCart}`,
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: props.id }),
        }
      )
      const newC = await cart.json()
      if (newC) {
        alert.show('Success!')
      }
    } catch (e) {
      console.log(e)
      alert.show('Failed to add item to cart')
    }
  }

  return (
    <div className="itemItem">
      <img src={Shirt} className="itemShirt" />
      <div className="itemContent">
        <div className="itemBlock">
          <div className="itemTitle">{props.title}</div>
          <div className="itemSize">{props.size.toUpperCase()}</div>
        </div>
        <div className="itemDescription">{props.description}</div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div className="itemPrice">${props.price}</div>
          <button
            style={{
              width: '2rem',
              height: '1.1rem',
            }}
            id={props.id}
            onClick={onClick}
          >
            <FaShoppingCart size={12} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item
