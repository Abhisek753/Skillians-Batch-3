import { useDispatch,useSelector } from 'react-redux'

import { increment,decrement,reset } from './redux/counterSlice'
import './App.css'

function App() {
 const count= useSelector((state)=>state.counter.value)
 const dispatch=useDispatch()
  return (
    <>
    <h1>Redux Counter App</h1>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
          <h2>Count: {count}</h2>
          <div style={{display:"flex",gap:"2px",alignItems:"center"}}>
            <button style={{border:"none",borderRadius:"5px",padding:"5px 10px",backgroundColor:"red",color:"white"}} onClick={() => dispatch(decrement())}>-</button>
            <button style={{border:"none",borderRadius:"5px",padding:"5px 10px",backgroundColor:"gray",color:"white"}} onClick={() => dispatch(reset())}>Reset</button>
            <button style={{border:"none",borderRadius:"5px",padding:"5px 10px",backgroundColor:"green",color:"white"}} onClick={() => dispatch(increment())}>+</button>
          </div>
    </div>
       
    </>
  )
}

export default App
