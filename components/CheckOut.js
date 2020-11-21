import { useState } from 'react'

import SubmitOrder from './SubmitOrder'
import StoreInfo from './StoreChanger'

export default function CheckOut({ price, store, setStore, clearBag }) {
  const [submit, toggleSubmit] = useState(true)

  const tax = (price * 0.15).toFixed(2)
  const total = (parseFloat(price) + parseFloat(tax)).toFixed(2)

  return (
    <div className="checkOut">
      <div className="location">
        <span>
          <b>Pick up at:</b>
        </span>
        <StoreInfo store={store} setStore={setStore} />
      </div>

      <span className="subtotal">
        <b>Subtotal:</b> {price}
      </span>
      <span className="tax">
        <b>Tax:</b> {tax}
      </span>
      <span className="total">
        <b>Total:</b> <span className="price">${total}</span>
      </span>
      {submit ? (
        <SubmitOrder price={total} toggleSubmit={toggleSubmit} clearBag={clearBag} />
      ) : (
        <button className="checkOutButton" onClick={() => toggleSubmit(true)}>
          Check Out
        </button>
      )}
    </div>
  )
}
