import React, { useState } from 'react'

const App = () => {

let  [num, setnum] = useState("0");

function inc(){
  setnum(num+1)
}
function dec(){
  if(num>0){

    setnum(num-1)
  }
}
function reset(){
  setnum(0)
}

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={inc}>+</button>
      <button onClick={reset}>reset</button>
      <button onClick={dec}>-</button>

    </div>
  )
}

export default App
