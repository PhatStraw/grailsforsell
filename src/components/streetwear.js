import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/bare.css'
import Shirt from '../assets/shirt.jpeg'
import ItemCover from './itemCover'
import Checkout from './checkout'

const Streetwear = () => {
  const [items, setItems] = useState()
  const [checkout, setCheckout] = useState()
  const [bollean, setBollean] = useState()

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(
          'http://localhost:8081/items/all'
        )
        const final = await res.json()
        console.log(final)
        setItems(final)
      } catch (err) {
        console.log(err)
      }
    }
    fetchItems()
  }, [])

  const onClick = async (e) => {
    var localCart = localStorage.getItem('cart');
    const cart = await fetch(`http://localhost:8081/user/additem?id=${localCart}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: e.target.id })
    });
    const newC = await cart.json()
    console.log(newC)
  }

  if (items && !checkout) {
    return (
      <div className="wrap">
        <div className="items">
          {items.doc.map((i) => {
            return( 
              <ItemCover
                onClick={onClick}
                id={i._id}
                photo={i.img}
                title={i.name}
                size={i.size}
                description={i.description}
                condition={i.condition}
                price={i.price}
              />
          )})}
        </div>
      </div>
    )
  }

  return <div>Loading</div>
}

export default Streetwear
