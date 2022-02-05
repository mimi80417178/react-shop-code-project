import React, { Component } from 'react';
import './productIntroduce.css'
import { ProductConsumer } from "../context"; //拿到value的值
import Title from './Title'
import { Link } from "react-router-dom";

class ProductIntroduce extends Component {
    render() {
        return (
            <>
                <ProductConsumer>
                    {(value) => {
                        console.log(value.detailProducts);
                        //解構賦值:達到快速建立變數+取值
                        const { id, title, img, company, info, price } = value.detailProducts;
                        return (
                            <div>
                                <Title title={title} />
                                <div className="introduce-banner">

                                    <div className="img-area">
                                        <div className="image">
                                            <img src={img} alt="" className='image-size' />
                                        </div>
                                    </div>
                                    <div className="introduce-area">

                                        <h3 className="model-title">Model : {title}</h3>
                                        <h5 className="company-name">Brand Name : {company} </h5>
                                        <h3 className="price">Price : $ {price}</h3>
                                        <h6 className="product-info">Product Description : {info}</h6>

                                        <div className="two-btn">
                                            <Link to="/">
                                                <button className='info-bagbtn'>
                                                    <span className='info-cart-plus'><i class="fa fa-arrow-circle-o-left" ></i></span>
                                                    <span className='info-bagbtnText' >Back To Product</span>
                                                </button>
                                            </Link>
                                            <button className='info-bagbtn' onClick={() => { value.addToCart(id) }}>
                                                <span className='info-cart-plus'><i class="fa fa-cart-plus" ></i></span>
                                                <span className='info-bagbtnText'>Add To Cart</span>
                                            </button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        )

                    }}
                </ProductConsumer>
            </>
        );
    }
}

export default ProductIntroduce;

