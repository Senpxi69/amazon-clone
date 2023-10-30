import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { basketTotal, getBasketTotal } from './reducer';

function Subtotal() {

const [{basket},dispatch] = useStateValue();

  return (
    
    <div className='subtotal'>
<CurrencyFormat
  renderText={(value) => (
    <>
      <p>
        Subtotal ({basket.length} {basket.length <= 1 ? "Item" : "Items"}):
        <strong>{value}</strong>
      </p>
      <small className='subtotal_gift'>
        <input type='checkbox'/>This order contains a gift
      </small>
    </>
  )}
  decimalScale={2}
  value={(getBasketTotal(basket))} // Ensure the value is a number
  displayType={'text'}
  thousandSeparator={true}
  prefix='₹'
/>


<button className='subtotal_button'>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal