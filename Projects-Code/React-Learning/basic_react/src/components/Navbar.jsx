import React from 'react'
import '../App.css';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
           <h2>My App</h2>
        </div>
        <div>
            <button>About</button>
            <button>Contact</button>
            <button>Price</button>
        </div>
        <div>
            <button>Login</button>
        </div>

    </div>
  )
}

export default Navbar