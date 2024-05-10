import React from "react";

function Card({ name }) {
  // console.log(name);
  return (
    <div style={{ background: "red", padding: "14px", width: "80px" }}>
      <div>Name: {name.name}</div>
      <div>Price:{name.price} </div>
      <div>cat: {name.category}</div>
    </div>
  );
}

export default Card;
