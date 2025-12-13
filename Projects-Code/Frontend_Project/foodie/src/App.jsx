import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRouter from './routes/AppRouter'
import { CartProvider } from './context/CartContext'

function App() {


  return (
    <>
    <CartProvider>
     <AppRouter />
    </CartProvider>
    </>
  )
}

export default App
