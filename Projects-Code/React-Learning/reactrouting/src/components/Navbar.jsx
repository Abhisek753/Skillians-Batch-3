import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav className='nav-container'>
            <h2>Dashboard</h2>
            <div className='btn-container app'>
             <Link to="/counter"> <button>Counter App</button></Link>
            <Link to="todo"> <button>Todo App</button></Link> 
            </div>
           <div className='btn-container'>
            <button>Home</button>
            <Link to='/about'>
             <button>About</button>
            </Link> 
     
            <Link to="/contact">
            <button>Contact</button>
            </Link>
           </div>
        </nav>
    </div>
  )
}

export default Navbar