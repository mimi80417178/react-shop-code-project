import React from 'react';
import './cart.css';


export default function CartHeader() {
    return (
        <>
            <div className='cartBanner'>
                <h3 className='cart-header'>
                    <span className='cart-text'>product</span>
                    <span className='cart-text'>name of product</span>
                    <span className='cart-text'>price</span>
                    <span className='cart-text'>quantity</span>
                    <span className='cart-text'>remove</span>
                    <span className='cart-text'>total</span>
                </h3>
            </div>
        </>
    )
}
