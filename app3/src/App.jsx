import React, { useState } from "react";
import ConditionalRendering from "./ConditionalRendering";
import Game from "./components/Game";

function App() {
  // const [value, setValue] = useState("")
  const [open, setOpen] = useState(true);

  // const handlleChange = (event) => {
  //   console.log(event.target.value);
  //   setValue(event.target.value)
  // }
  const render = () => {
    if (open) {
      return (
        <>
          <div
            style={{
              height: "250px",
              width: "250px",
              background: "yellow",
              padding: "10px",
              margin: "50px",
            }}
          ></div>
          <div
            style={{
              height: "250px",
              width: "250px",
              background: "green",
              padding: "10px",
              margin: "50px",
            }}
          ></div>
        </>
      );
    } else {
      return (
        <div
          style={{
            height: "250px",
            width: "250px",
            background: "red",
            padding: "10px",
            margin: "50px",
          }}
        ></div>
      );
    }
  };

  return (
    <div>
      {/* <div>{value}</div> */}
      {/* <input type="text" onChange={(event) => handlleChange(event)} value={value} /> */}
      {/* { open && <ConditionalRendering />} */}
      {/* {render()} */}
      {/* <button onClick={() => setOpen(!open)}>click</button> */}
      <Game />
    </div>
  );
}

// 1: take input field
// 2: select event
// 3: passing a funcion
// 4: check if function is envoked on event
// 5: check the input vlues are taken into the function
// 6: create state and store the value
// 7: set the value attribute of the input

export default App;
