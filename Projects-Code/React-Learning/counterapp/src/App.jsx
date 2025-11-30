import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Form from './components/Form/Form'
import  {useAuth}  from './contextapi/AuthContext'
import  {useTheme}  from './contextapi/ThemeContext'

function App() {
const {theme,toggleTheme}=useTheme()
const {user,Login,Logout}=useAuth()
const [value,setValue]=useState(5)
const LoginFun=()=>{
  Login("Rajan")
}
const LogoutFun=()=>{
  Logout("Rajan")
}

const ans=useMemo(()=>{
  console.log("usememo")
    return value*value
},[value])

// const normal=value*4*56*56
// console.log(normal)




  return (
    <div style={{color:theme=="light"?"black":"white",backgroundColor:theme=="light"?"white":"yellow"}}>
      <h2>{ans}</h2>


    <button onClick={toggleTheme}>Toggle</button>
  <button onClick={LoginFun}>Login</button>
  <button onClick={LogoutFun}>Logout</button>
     {user?<Counter/>:""}
     <Form/>
    </div>
  )
}

export default App
