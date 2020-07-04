import React, {useState, useEffect} from "react";
import "../css/bare.css"
import Shirt from '../assets/shirt.jpeg'

const Item = (props) => {
  return (
    <div className="itemItem">
      <img src={Shirt} className="itemShirt"/>
      <div className="itemContent">
        <div className="itemBlock">
          <div className="itemTitle">{props.title}</div>
          <div className="itemSize">{props.size.toUpperCase()}</div>
        </div>
        <div className="itemCondition">{props.description}</div>
        <div>{props.price}</div>
      </div>
    </div>
  );
};

export default Item;
