import React, { forwardRef } from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';
const CheckoutProduct = forwardRef(({ id, title, image, price, rating, hideButton }, ref) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div ref={ref} key={id} className='checkoutProduct'>
            <img
                className='checkoutProduct__image'
                src={image}
                alt=''
            />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>₹</small>
                    <strong>{price}.00 </strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>⭐</p>
                    ))}
                </div>
                {!hideButton && <button onClick={removeFromBasket}>Remove from Cart</button>}
            </div>
        </div>
    )
})


export default CheckoutProduct