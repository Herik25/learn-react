import React, { useState } from 'react'
import ConditionalRendering from './ConditionalRendering'

function App() {
  const [value, setValue] = useState("")
  
  const handlleChange = (event) => {
    // console.log(event.target.value);
    setValue(event.target.value)
  }

  return (
    <div>
      <div>{value}</div>
      <input type="text" onChange={(event) => handlleChange(event)} value={value} />
      <ConditionalRendering />
    </div>
  )
}

// 1: take input field
// 2: select event
// 3: passing a funcion 
// 4: check if function is envoked on event
// 5: check the input vlues are taken into the function 
// 6: create state and store the value
// 7: set the value attribute of the input

export default App