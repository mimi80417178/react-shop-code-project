import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductIntroduce from "./components/Product-Introduce";
import Cart from "./components/Cart";



class Shop extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={ProductList} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/introduce" component={ProductIntroduce} />


                </Switch>
            </React.Fragment>

        );
    }
}

export default Shop;
