// cart.tsx
import React from 'react'

interface CartItem {
  id: string
  title: string
  price: number
  quantity: number
  currency: string
}

interface CartProps {
  items: CartItem[]
}

const Cart: React.FC<CartProps> = ({ items }) => {
  // Calculate subtotal
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  // Format currency
  const formatCurrency = (amount: number, currency: string) => {
    return `${amount.toFixed(2)} ${currency}`
  }

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-6">Your Product</h1>

      {/* Product Image Banner */}
      <div className="w-full h-32 bg-blue-50 mb-8 flex items-center justify-center">
        <div className="text-blue-300 text-sm">Product Image</div>
      </div>

      {/* Order Summary */}
      <h2 className="text-xl font-semibold text-center mb-4">Your Order</h2>

      <div className="border-t border-b">
        {/* Header */}
        <div className="grid grid-cols-6 py-2 font-medium">
          <div className="col-span-1">Product</div>
          <div className="col-span-4"></div>
          <div className="col-span-1 text-right">Subtotal</div>
        </div>

        {/* Cart Items */}
        {items.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-6 py-4 border-t border-pink-200 items-center"
          >
            <div className="col-span-1">
              <div className="w-16 h-16 bg-black flex items-center justify-center text-white">
                img
              </div>
            </div>
            <div className="col-span-4 px-4">
              <p className="font-medium">{item.title}</p>
              <p className="text-sm mt-1">
                x {item.quantity} = {formatCurrency(item.price, item.currency)}
              </p>
            </div>
            <div className="col-span-1 text-right">
              {formatCurrency(item.price * item.quantity, item.currency)}
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 mt-4">
        <div className="text-left font-medium">Subtotal</div>
        <div className="text-right">
          {items.length > 0
            ? formatCurrency(subtotal, items[0].currency)
            : '0.00'}
        </div>
      </div>

      <div className="grid grid-cols-2 mt-2 pt-2 border-t">
        <div className="text-left font-bold">Total</div>
        <div className="text-right font-bold">
          {items.length > 0
            ? formatCurrency(subtotal, items[0].currency)
            : '0.00'}
        </div>
      </div>
    </div>
  )
}

export default Cart
