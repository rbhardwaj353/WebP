import React, { Component } from 'react';
import {Productconsumer} from '../context';
import {Link} from 'react-router-dom';
import './style.css';

export default class Model extends Component {
    render() {
        return (
            <Productconsumer>
                {value => {
                    const {modelopen,closemodel} = value;
                    const {img,title,price} = value.modelproduct;
                    if(!modelopen){
                        return null;
                    }
                    else{
                        return (
                            <div className="container popup-detail">
                                <div className="row">
                                    <div id="model" className="col-8 mx-auto col-md-8 col-lg-8 p-5">
                                        <h5>Item Added to Cart</h5>
                                        <img src={img} className="img-fluid" alt="product" />
                                        <h5>{title}</h5>
                                        <h5>Price : Rs.{price}</h5>
                                        <Link to="/">
                                            <button className="btn btn-outline-danger" onClick={() => closemodel()}>
                                                Store
                                            </button>
                                        </Link>
                                        <Link to="/cart">
                                            <button className="btn btn-outline-warning" onClick={() => closemodel()}>
                                                Go To Cart
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }}
            </Productconsumer>
        )
    }
}
