import React, { useEffect, useState,useRef } from 'react'
import "./Counter.css"
const Counter = () => {
   const [count,setCount]=useState(0)
   const inputRef=useRef(null);

const Increment=()=>{
    setCount(count+1)
    }
 const Decrement=()=>{
    setCount(count-1)
 }
const Reset =()=>{
   setCount(0)
 }
 const Multiply=(value)=>{
    setCount(count*value)
 }

const handleFocus=()=>{
   // inputRef.current.focus();
   alert(`You entered: ${inputRef.current.value}`);
}


 useEffect(()=>{
   console.log("Counter component running");
   console.log(2+2)

 },[])




  return (
    <div className='counter' >
        <h2>Counter App</h2>
        <div className='parent'>
            <h2 className='count'>{count}</h2>
            <div className='btn-container'>
                <button className='increment btn' onClick={Increment}>Increment</button>
                <button className='decrement btn' disabled={count==0} onClick={Decrement}>Decrement</button>
                <button className='multipy btn' disabled={count==0} onClick={()=>Multiply(4)}>Multiply by value</button>
                <button className='reset btn' onClick={Reset}>Reset</button>
            </div>
        </div>

        <input ref={inputRef} type="text" placeholder='Enter something...' />
        <button onClick={handleFocus}>Submit</button>
    </div>
  )
}
export default Counter