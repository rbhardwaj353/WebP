import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Productconsumer} from '../context';
import {MdAddShoppingCart} from "react-icons/md";
import Proptypes from 'prop-types';
import './style.css';

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <div className="col-lg-3 col-md-6 col-sm-12 mx-auto">
                <div className="card">
                    <Productconsumer>
                        {value => (
                            <div className="img-container" onClick={() => value.handledetail(id)}>
                            <Link to="/details">
                                <img src={img} alt="product" className="card-img-top" />
                            </Link>
                            <button className="card-btn" disabled={inCart ? true : false} onClick={()=>{
                                value.addtocart(id);
                                value.openmodel(id);
                                }}>
                            {inCart ? (<p className="title-text mb-0" disabled>
                                {" "}
                                In Cart
                            </p>) : (<MdAddShoppingCart />)}
                            </button>
                            </div>
                        )}
                    
                    </Productconsumer>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="font-italic mb-0">
                            <span>Rs.</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}

Product.propTypes = {
    product: Proptypes.shape({
        id: Proptypes.number,
        img: Proptypes.string,
        title: Proptypes.string,
        price: Proptypes.number,
        incart: Proptypes.bool
    }).isRequired
}