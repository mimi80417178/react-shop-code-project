import React from 'react';
import './cart.css';

export default function CartTotal({ value }) {
    const { cartSubTotally, clearAllCartSS } = value;
    return (
        <>
            <div className='cartTotal'>
                <button className='clearItem-btn' onClick={() => clearAllCartSS()}> CLEAR CART</button>
                <span className='subtotal-text'>subtotally : </span>
                <strong>$ {cartSubTotally}</strong>
            </div>
        </>
    )
}
