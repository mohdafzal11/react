import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    function handleClick  (type){
          if(type ==="inc" && count<20){
            setCount(count+1);
          }
          else if (type=="dec" && count>0){
            setCount(count-1);
          }
    }
  return (
    <div>
        <button onClick={()=>{handleClick("inc")}}>Increment</button>
        <button onClick={()=>{handleClick("dec")}}>Decrement</button>
        <h1>{count}</h1>
    </div>
  )
}

export default Counter