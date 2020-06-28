import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/bare.css'
import Shirt from '../assets/shirt.jpeg'

const Vintage = () => {
  return (
    <div className="homeWrapper">
      <div className="items">
        <div className="item">
          <img src={Shirt} />
          <div>Title</div>
          <div>Description</div>
          <div>Price</div>
        </div>
        <div className="item">
          <img src={Shirt} />
          <div>Title</div>
          <div>Description</div>
          <div>Price</div>
        </div>
        <div className="item">
          <img src={Shirt} />
          <div>Title</div>
          <div>Description</div>
          <div>Price</div>
        </div>
        <div className="item">
          <img src={Shirt} />
          <div>Title</div>
          <div>Description</div>
          <div>Price</div>
        </div>
        <div className="item">
          <img src={Shirt} />
          <div>Title</div>
          <div>Description</div>
          <div>Price</div>
        </div>
        <div className="item">
          <img src={Shirt} />
          <div>Title</div>
          <div>Description</div>
          <div>Price</div>
        </div>
      </div>
    </div>
  )
}

export default Vintage
