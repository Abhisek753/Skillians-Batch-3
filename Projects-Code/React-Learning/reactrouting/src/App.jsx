import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'
import Counter from './components/counterapp/Counter'
import Todo from './components/todoapp/Todo'

function App() {

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>

       <Route path="/counter" element={<Counter/>}/>
      <Route path="/todo" element={<Todo/>}/>
     </Routes>
    </>
  )
}

export default App
