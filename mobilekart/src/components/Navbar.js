import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import './style.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <Link to="/" className="nav-link"><h2>Mobikart</h2></Link>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link"><h3>Products</h3></Link>
                    </li>
                </ul>
                <ul className="navbar-nav justify-content-end">
                    <Link to="/cart" className="mr-auto">
                        <button type="button" className="btn btn-outline-info">
                            <FiShoppingCart className="cartlogo" />
                            My Cart
                        </button>
                    </Link>
                </ul>
            </nav>
        )
    }
}
