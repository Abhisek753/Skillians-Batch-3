import React, { useState } from 'react'
import "./Counter.css"
const Counter = () => {
   const [count,setCount]=useState(0)
const Increment=()=>{
    setCount(count+1)
    }
 const Decrement=()=>{
    setCount(count-1)
 }
const Reset =()=>{
   setCount(0)
 }
 const Multiply=()=>{
    setCount(count*2)
 }

  return (
    <div className='counter' >
        <h2>Counter App</h2>
        <div className='parent'>
            <h2 className='count'>{count}</h2>
            <div className='btn-container'>
                <button className='increment btn' onClick={Increment}>Increment</button>
                <button className='decrement btn' disabled={count==0} onClick={Decrement}>Decrement</button>
                <button className='multipy btn' disabled={count==0} onClick={Multiply}>Multiply by 2</button>
                <button className='reset btn' onClick={Reset}>Reset</button>
            </div>
        </div>
    </div>
  )
}
export default Counter