import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/bare.css'
import Shirt from '../assets/shirt.jpeg'
import ItemCover from './itemCover'

const Hype = () => {
  const [items, setItems] = useState()

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(
          'http://localhost:8081/items/all'
        )
        const final = await res.json()
        setItems(final)
      } catch (err) {
        console.log(err)
      }
    }
    fetchItems()
  }, [])
  if (items) {
    return (
      <div className="wrap">
        <div className="items">
          {items.doc.map((i) => {
            return( 
              <ItemCover
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

export default Hype
