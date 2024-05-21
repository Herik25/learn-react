import React from "react";

function Card({ name }) {
  // console.log(name);
  var age = 23
  return (
    // <div style={{ background: "red", padding: "14px", width: "80px" }}>
    //   <div>Name: {name.name}</div>
    //   <div>Price:{name.price} </div>
    //   <div>cat: {name.category}</div>
    // </div>
    <div>
      <h1>My name is harsh</h1>
      <p>my age is {age}</p>
    </div>
  );
}

export default Card;
