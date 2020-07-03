import React from "react";

const Item = (props) => {
  return (
    <div className="item">
      <img src={props.photo} />
      <div>{props.title}</div>
      <div>{props.size}</div>
      <div>{props.condition}</div>
      <div>{props.price}</div>
    </div>
  );
};

export default Item;
