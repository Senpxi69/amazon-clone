import React, { useState } from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating }) {

const [state,dispatch] = useStateValue();

const addToCart = () =>{
// dispatch the item in datalayer
dispatch({
    type:"ADD_TO_CART",
    item:{
    id:id,
    title:title,
    image:image,
    price:price,
    rating:rating
}

})
}
const formattedPrice = price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small></small>
                    <strong>{formattedPrice}</strong>
                </p>

                <div className='product_rating'>{rating}</div>


            </div>

            <img src={image} />

            <button onClick={addToCart}>Add to cart</button>


        </div>
    )
}

export default Product