// pages/cart.tsx
import type { NextPage } from 'next'
import Cart from './Cart'

const CartBox: NextPage = () => {
  // This would typically come from your state management or API
  const cartItems = [
    {
      id: '1',
      title: 'Product Title Product Title',
      price: 199.0,
      quantity: 1,
      currency: 'Tk',
    },
  ]

  return (
    <div className="min-h-[60vh]">
      <Cart items={cartItems} />
    </div>
  )
}

export default CartBox
