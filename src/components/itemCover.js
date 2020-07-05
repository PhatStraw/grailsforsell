import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom"
import "../css/bare.css"
import Shirt from '../assets/shirt.jpeg'

const ItemCover = (props) => {
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  
  useEffect(()=>{
    if(props.title.length > 18){
        var newTitle = props.title.slice(0, 15) 
        setTitle(newTitle.concat('...'))   
    }else{
      setTitle(props.title)
    }

    if(props.description.length > 34){
      var newDescription = props.description.slice(0, 30) 
      setDescription(newDescription.concat('...'))   
    }else{
      setDescription(props.description)
    }
  },[props])
  
  return (
    <div className="item">
      <Link to={`/item/${props.id}`}>
        <img src={Shirt} />
      </Link>
      <div className="itemContent">
        <div className="itemBlock">
          <div className="CoverTitle">{title}</div>
          <div className="CoverSize">{props.size.toUpperCase()}</div>
        </div>
        <div className="CoverDescription">{description}</div>
        <div className="CoverPrice">${props.price}</div>
      </div>
    </div>
  );
};

export default ItemCover;
