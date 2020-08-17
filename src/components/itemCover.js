import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/bare.css'
import Shirt from '../assets/shirt.jpeg'
import { FaShoppingCart } from 'react-icons/fa'
import { useAlert } from 'react-alert'

const ItemCover = (props) => {
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [id, setId] = useState()
  const alert = useAlert()

  useEffect(() => {
    setId(props.id)
    if (props.title.length > 18) {
      var newTitle = props.title.slice(0, 15)
      setTitle(newTitle.concat('...'))
    } else {
      setTitle(props.title)
    }

    if (props.description.length > 34) {
      var newDescription = props.description.slice(0, 30)
      setDescription(newDescription.concat('...'))
    } else {
      setDescription(props.description)
    }
  }, [props])

  const onClick = async (e) => {
    e.preventDefault()
    try {
      var localCart = localStorage.getItem('cart')
      if (localCart) {
        const data = await fetch(
          `https://grailsforsell.herokuapp.com/user/additem?id=${localCart}`,
          {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
          }
        )
        const cart = await data.json()
        if (cart) {
          alert.show('Success!')
          return
        }
      }
      alert.show('Please sign in')
    } catch (e) {
      console.log(e)
      alert.show('Failed to add item to cart')
    }
  }

  if (props.id) {
    return (
      <div className="item">
        <Link to={`/item/${props.id}`}>
          <img
            src={props.photo}
            style={{ margin: '0 auto', height: 'auto', maxHeight: '150px', width: '100%' }}
          />
        </Link>
        <div className="itemContent">
          <div className="itemBlock">
            <div className="CoverTitle">{title}</div>
            <div className="CoverSize">{props.size.toUpperCase()}</div>
          </div>
          <div className="CoverDescription">{description}</div>
          <div className="priceCart">
            <div className="CoverPrice">${props.price}</div>
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
  return <div>Loading</div>
}

export default ItemCover
