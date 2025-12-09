import React from 'react'
import HomePage from '../pages/HomePage'
import CartPage from '../pages/CartPage'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import ProductDetailPage from '../pages/ProductDetailPage'

const AppRouter = () => {
  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      
        <Navbar/>
        <main>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/cart' element={<CartPage/>}/>
                 <Route path='/product/:id' element={<ProductDetailPage/>}/>
            </Routes>
        </main>
        
    </div>
  )
}

export default AppRouter