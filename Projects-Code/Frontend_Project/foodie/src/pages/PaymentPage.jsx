// ...existing code...
import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

const PaymentPage = () => {
  const { totalAmount } = useCart()
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')

  const handlePay = (e) => {
    e.preventDefault()
    if (!cardName.trim() || cardNumber.replace(/\s+/g, '').length < 12) {
      alert('Please enter a valid cardholder name and card number.')
      return
    }
    alert('Payment Successful')
    // reset (optional)
    setCardName('')
    setCardNumber('')
  }

  const formatCardNumber = (val) =>
    val.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim()

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Payment</h2>
      <p className="mb-4">Payable amount: ${totalAmount.toFixed(2)}</p>

      <form onSubmit={handlePay} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Cardholder Name</label>
          <input
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="Full name"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            placeholder="1234 5678 9012 3456"
            maxLength={19}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={!cardName || cardNumber.replace(/\s+/g, '').length < 12}
        >
          Pay
        </button>
      </form>
    </div>
  )
}

export default PaymentPage
// ...existing code...