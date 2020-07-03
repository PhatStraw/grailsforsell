import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/bare.css'
import Shirt from '../assets/shirt.jpeg'
import Item from '../components/item'
// const items = [
//   {
//     img: Shirt, title: 'Hello', Description: 'helllllo', Price: '1000'
//   },
//   {
//     img: Shirt, title: 'Hello', Description: 'helllllo', Price: '1000'
//   },
//   {
//     img: Shirt, title: 'Hello', Description: 'helllllo', Price: '1000'
//   },
//   {
//     img: Shirt, title: 'Hello', Description: 'helllllo', Price: '1000'
//   },
//   {
//     img: Shirt, title: 'Hello', Description: 'helllllo', Price: '1000'
//   },
//   {
//     img: Shirt, title: 'Hello', Description: 'helllllo', Price: '1000'
//   },
// ]

const Streetwear = () => {
  const [items, setItems] = useState()

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(
          'http://localhost:8081/items/all?id=5efe6eb6dd66c17768efe7ea'
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
  if (items) {
    return (
      <div className="homeWrapper">
        <div className="items">
          {items.doc.map((i) => {
            {console.log(i)}
            return( 
            <Item
              photo={i.img}
              title={i.name}
              size={i.size}
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
