import React from 'react'
import { useState } from 'react'

const Counter = () => {
let [counter , setCounter] = useState(0)
 const increment = ()=>{
    setCounter(counter+1)
 };
 const decrement = ()=>{
    setCounter(counter-1)
 };
 const reset = ()=>{
    setCounter(0)
 };
  return (
    <div className='bg-black'>
      <h1>Counter value :{counter}</h1><br />
      <button onClick={increment}>Increment</button><br />
      <button onClick={decrement}>Decrement</button><br />
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
