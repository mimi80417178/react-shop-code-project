import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png"
import './navbar.css';

const Navbar = () => {

    return (
        <nav className="navbar ">

            <div className="logo-name ">
                <Link to="/"> <img src={logo} alt="store" className='navbar-logo' /> </Link>
                <Link to="/" className='nav-link'>Products</Link>
            </div>

            <Link to="/cart" >
                <button className='cartBTN'>
                    <i class="fa fa-cart-plus" ></i>
                    <span>Carts</span>

                </button>
            </Link>
        </nav>
    );

}


export default Navbar;
