import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './productList.css'
import Title from './Title'
import { ProductConsumer } from "../context"; //拿到value的值


class Productlist extends Component {

    render() {
        return (
            <>
                <Title title="our products..." />
                <div className='productList-banner'>
                    <ProductConsumer>
                        {value => {
                            //console.log(value)//抓取 ProductContext.Provider value{{值.....}}
                            /*
                             <ProductContext.Provider value={{               
                               ...this.state,
                              changeFirstIntrosss: this.changeFirstIntro,
                             addToCart: this.addToCart,  //(idx) => {...} 等於  function addToCartsss()=>{]
                         }}
                            >{this.props.children}
                            */

                            return value.products.map((items) => {
                                const { id, img, title, price } = items;

                                return (
                                    <div key={id} className='itemsAll' >
                                        <Link to="/introduce"> <img src={img} alt="" className='productImage'
                                            onClick={() => { value.changeFirstIntrosss(id) }} />
                                        </Link>
                                        <div className='productText'>
                                            <h5>Name : {title}</h5>
                                            <h3>${price}</h3>
                                        </div>

                                        <button className='bagbtn' refresh="true" onClick={() => { value.addToCart(id) }}>
                                            <span className='cart-plus'><i class="fa fa-cart-plus" ></i></span>
                                            <span className='bagbtnText'>Add To Cart</span>
                                        </button>

                                    </div>
                                )
                            })
                        }}
                    </ProductConsumer>
                </div>
            </>
        );
    }
}

export default Productlist;


