import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement,reset } from './slices/counterSlice'

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state)=> state.counter.value)
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default App
