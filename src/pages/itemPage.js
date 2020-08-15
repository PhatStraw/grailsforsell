import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/bare.css'
import Shirt from '../assets/shirt.jpeg'
import Item from '../components/item'

const ItemPage = (props) => {
  const [item, setItem] = useState()
  useEffect(()=>{
    const hit = async() =>{
        const doc = await fetch(`http://localhost:8081/items/solo?id=${props.match.params.id}`)
        const item = await doc.json()
        console.log(item.item)
        setItem(item)
      }
     hit()
    },[])

  if(item){
    return (
      <div className="itemPage">
        <Item
          // photo={item.item.img}
          id={item.item._id}
          title={item.item.name}
          size={item.item.size}
          description={item.item.description}
          condition={item.item.condition}
          price={item.item.price}
        />
      </div>
    )
  }
  return <div> Loading</div>
}

export default ItemPage
