import React from 'react';
import './cart.css';

export default function CartList({ value }) {
    const { cart } = value
    console.log(cart)//點擊add cart BTN 加入到陣列裡的物件[{...}{...}{...},{...},{...}](5)
    console.log(value)
    return (
        <>
            {cart.map((item) => {
                const { id, img, title, price, total, count } = item;

                return (
                    <div key={id} className='cart-display-item'>
                        <div className='cart-item-image'>
                            <img src={img} alt="" className='image-size' />
                        </div>
                        <h4 className='cart-item-title' >{title}</h4>
                        <h4 className='cart-item-price' > $ {price}</h4>

                        <h4 className='cart-item-up-down-btn'>
                            <button className='cart-item-down-btn' onClick={() => { value.decreaceBTNSS(id) }}>-</button>
                            <span className='cart-item-quantity'>{count}</span>
                            <button className='cart-item-up-btn' onClick={() => { value.increaceBTNSS(id) }}>+</button>
                        </h4>
                        <h4 className='cart-item-remove' onClick={() => { value.removeBTNSS(id) }}>
                            <i class="fa fa-trash-o"></i>
                        </h4>
                        <h4 className='cart-item-totally'>
                            <span><b>{total}</b></span>
                        </h4>
                    </div>
                )
            })}
        </>
    )
}
/*
 //console.log(value)//抓取 ProductContext.Provider value{{值.....}}
                            /*
                             <ProductContext.Provider value={{               
                               ...this.state,
                              changeFirstIntrosss: this.changeFirstIntro,
                             addToCart: this.addToCart,  //(idx) => {...} 等於  function addToCartsss()=>{]
                              increaceBTNSS: this.increaceBTN,
                             decreaceBTNSS: this.decreaceBTN,
                             removeBTNSS: this.removeBTN,
                             clearAllCartSS: this.clearAllCart
                           }}
                            >{this.props.children}
                            *
*/