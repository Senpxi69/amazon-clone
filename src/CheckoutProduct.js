import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id , image , title , price , rating}) {
  const [{basket},dispatch] = useStateValue();

function removeFromCart(){
  dispatch({
    type:"REMOVE_FROM_CART",
    item:{
      id:id,
      title:title,
      image:image,
      price:price,
      rating:rating
    }
  })
}

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct_img' src={image}/>
      <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>{title}</p>
            <strong className='checkoutProduct_price'>₹{price}</strong>
            <p className='checkoutProduct_rating'>{rating}</p>
            <button 
            onClick={removeFromCart}
            className='checkoutProduct_button'>Remove from cart</button>
      </div>
    </div>
  )
}

export default CheckoutProduct