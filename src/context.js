import React, { Component } from 'react';
import { storeProduct, detailProduct } from "./data";

const ProductContext = React.createContext();
// React Context API 的運作 //參考網址:https://whien.medium.com/%E9%80%8F%E9%81%8E-react-usecontext-%E8%88%87-usereducer-%E4%BE%86%E5%81%9A-global-state-manager-bed30fb1f08b
//1.React.createContext
//2.Context.Provider (改變value 的值)
//3.Context.Consumer(抓取Provider的value 值)

class ProductProvider extends Component {
    state = {
        products: [], //抓./data (Array(8) [{...},{...},{...},~~~])
        detailProducts: detailProduct, //抓./data {object(1)}
        cart: [],
        cartSubTotally: 0,

    };
    //建立組件()
    setProductsArray = () => {
        let productsArray = [];
        storeProduct.forEach((item) => {
            const Item = { ...item };
            productsArray = [...productsArray, Item];
        });
        this.setState(() => {
            return { products: productsArray }
        });
    };
    //1.先:組件:function 已被觸發，2.後:render DOM(渲染畫面)
    componentDidMount() {
        this.setProductsArray();
    }

    getItem = idx => {
        const product = this.state.products.find(item => item.id === idx);//this.state.products已經componentDidMount觸發完成~~
        console.log(this.state.products) //[{...}](8) 陣列裡的物件有8個
        console.log(idx) //點擊add cart btn 顯示各項id值 1.2.3.4.5.6.7.8
        return product;
    }

    changeFirstIntro = (idx) => {
        const productIntro = this.getItem(idx);
        this.setState(() => {
            return { detailProducts: productIntro }; //:冒號就是等於的意思
        }
        )
    };

    addToCart = idx => {//value.addToCartsss(id)= 箭頭函數(idx) =>{...}
        //console.log(`Hello from addToCart is ${idx}`);
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(idx));
        const product = tempProducts[index];
        product.count = product.count + 1;
        const price = product.price;
        product.total = price;
        this.setState(
            () => {
                return { products: tempProducts, cart: [...this.state.cart, product] };
            },
            //() => { console.log(this.state); }
            () => { this.addTotalPrice(); },


        );
    };

    increaceBTN = (idx) => {
        //console.log("increaceBTN : up +1")
        let cartItem = [...this.state.cart];
        console.log(cartItem)//看目前購物車加入品項數量
        const matchItemId = cartItem.find(item => item.id === idx)
        const index = cartItem.indexOf(matchItemId);
        const product = cartItem[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(
            () => {
                return { cart: [...cartItem] };
            },
            () => {
                this.addTotalPrice();
            }
        )

    }

    decreaceBTN = (idx) => {
        //console.log("decreaceBTN : down -1")
        let cartItem = [...this.state.cart];
        console.log(cartItem)//看目前購物車加入品項數量
        const matchItemId = cartItem.find(item => item.id === idx)
        const index = cartItem.indexOf(matchItemId);
        const product = cartItem[index];

        product.count = product.count - 1;
        if (product.count === 0) {
            this.removeBTN(idx)
        }
        else {
            product.total = product.count * product.price;
            this.setState(
                () => {
                    return { cart: [...cartItem] };
                },
                () => {
                    this.addTotalPrice();
                }
            )
        }
    }

    removeBTN = (idx) => {
        //console.log("removeBTN : removeBTN -1")
        let tempProducts = [...this.state.products];
        let cartRemove = [...this.state.cart];
        cartRemove = cartRemove.filter(item => item.id !== idx);
        const index = tempProducts.indexOf(this.getItem(idx));
        let removeProduct = tempProducts[index];
        removeProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...cartRemove],
                products: [...tempProducts]
            };
        },
            () => {
                this.addTotalPrice();
            }
        )
    }
    addTotalPrice = () => {
        let totalprice = 0;
        this.state.cart.map(item => (totalprice += item.total))// addToCart = idx => {...product.total = price;}
        const total = totalprice
        this.setState(() => {
            return {
                cartSubTotally: total
            }
        })
    }
    clearAllCart = () => {
        this.setState(() => {
            return { cart: [] };
        },
            () => {
                this.setProductsArray();
                this.addTotalPrice();
            }
        )
    }


    render() {
        return (
            <ProductContext.Provider value={{
                //第二種寫法:   productsdetailProducts: this.state,
                ...this.state,
                changeFirstIntrosss: this.changeFirstIntro,
                addToCart: this.addToCart,  //(idx) => {...} 等於  function addToCartsss()=>{]
                increaceBTNSS: this.increaceBTN,
                decreaceBTNSS: this.decreaceBTN,
                removeBTNSS: this.removeBTN,
                clearAllCartSS: this.clearAllCart
            }}
            >{this.props.children}
            </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer };
