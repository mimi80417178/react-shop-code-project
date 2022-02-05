import React, { Component } from 'react';
import './cart.css';
import Title from './Title'
import { ProductConsumer } from "../context"; //拿到value的值
import CartHeader from "./CartHeader";
import CartList from "./CartList";
import CartEmpty from "./CartEmpty";
import CartTotal from "./CartTotal";





class Cart extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        //console.log(value,cart) //[]
                        if (cart.length > 0) {
                            return (
                                <>
                                    <Title title="YOUR CART...." />
                                    <CartHeader />
                                    <CartList value={value} />
                                    <CartTotal value={value} />
                                </>
                            )
                        }
                        else {
                            return <CartEmpty />;
                        }
                    }}
                </ProductConsumer>
            </div>
        )
    }
}

export default Cart;
