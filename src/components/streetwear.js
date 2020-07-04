import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/bare.css'
import Shirt from '../assets/shirt.jpeg'
import ItemCover from './itemCover'

const Streetwear = () => {
  const [items, setItems] = useState()

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(
          'http://localhost:8081/items/all?id=5f00b50db4df209b36ddb7ed'
        )
        const final = await res.json()
        // console.log(final)
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
            {{console.log(i)}}
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

export default Streetwear
