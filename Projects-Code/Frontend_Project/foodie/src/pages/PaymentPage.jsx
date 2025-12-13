import React from 'react'
import { useCart } from '../context/CartContext'

const PaymentPage = () => {
const {totalQty}=useCart()

  return (
    <div>
    <div>
     Payble ampunt ${totalQty}
     <button className='bg-blue-600 text-white px-4 py-2 h-fit ml-4' onClick={()=>alert("Payment Sucessful")}>Pay</button>
    </div>
    </div>
  )
}

export default PaymentPage