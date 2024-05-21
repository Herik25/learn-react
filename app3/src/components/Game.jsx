import React from "react";

function Game() {
  const data = ["harsh", "devanshu", "divyesh", "boy1", "boy2", "boy3"];
  const obj = [
    {
      id: 1,
      name: "harsh",
      age: 20,
      gender: "male",
      country: "india",
    },
    {
      id: 2,
      name: "devanshu",
      age: 20,
      gender: "male",
      country: "india",
    },
    {
      id: 3,
      name: "divyesh",
      age: 20,
      gender: "male",
      country: "india",
    },
  ];

  const str = "harsh"
  console.log(str.split("").reverse());
//   console.log(str);

  return (
    <div>
      {obj.map((item) => <h1 key={item.id}>{item.name}</h1>)}
    </div>
  );
}

export default Game;
