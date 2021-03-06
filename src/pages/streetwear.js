import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/bare.css'
import Shirt from '../assets/shirt.jpeg'
import ItemCover from '../components/itemCover'

const Streetwear = () => {
  const [items, setItems] = useState()
  const [checkout, setCheckout] = useState()
  const [bollean, setBollean] = useState()

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(
          'https://grailsforsell.herokuapp.com/items/category?category=streetwear'
        )
        const final = await res.json()
        setItems(final)
      } catch (err) {
        console.log(err)
      }
    }
    fetchItems()
  }, [])
  

  if (items && !checkout) {
    return (
      <div className="wrap">
        <div className="items">
          {items.doc.map((i) => {
            console.log(i._id)
            return( 
              <ItemCover
                id={i._id}
                photo={i.image}
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
