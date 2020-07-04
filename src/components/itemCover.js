import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom"
import "../css/bare.css"
import Shirt from '../assets/shirt.jpeg'

const ItemCover = (props) => {
  const [title, setTitle] = useState()
  
  useEffect(()=>{
    if(props.title.length > 18){
        var newTitle = props.title.slice(0, 15) 
        setTitle(newTitle.concat('...'))   
    }else{
      setTitle(props.title)
    }
  },[props])
  
  return (
    <div className="item">
      <Link to={`/item/${props.id}`}>
        <img src={Shirt} />
      </Link>
      <div className="itemContent">
        <div className="itemBlock">
          <div className="itemTitle">{title}</div>
          <div className="itemSize">{props.size.toUpperCase()}</div>
        </div>
        <div className="itemCondition">{props.description}</div>
        <div>{props.price}</div>
      </div>
    </div>
  );
};

export default ItemCover;
