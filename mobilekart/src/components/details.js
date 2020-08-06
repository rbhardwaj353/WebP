import React, { Component } from 'react';
import {Productconsumer} from '../context';
import {Link} from 'react-router-dom';
import './style.css';

export default class details extends Component {
    render() {
        return (
            <Productconsumer>
                {value => {
                    const {id,company,img,info,price,title,inCart} = value.detail;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto my-5 detail-text">
                                    <h1 className="tag" align="center">{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h1>Model : {title}</h1>
                                    <h4 className="mt-3 mb-2">
                                        Made by :<span className="tag">&nbsp;{company}</span>
                                    </h4>
                                    <h4>
                                        Price : <span className="tag">&nbsp;{price}</span>
                                    </h4>
                                    <p className="font-weight-bold mt-3 mb-0">
                                        <h5 className="tag">Product Details :</h5> 
                                        <p className="lead">{info}</p>
                                    </p>
                                    <div>
                                        <Link to="/">
                                            <button className="btn btn-outline-danger">
                                                Back to Products
                                            </button>
                                        </Link>
                                            <span>&nbsp;&nbsp;</span>
                                            <button className="btn btn-outline-success" disabled={inCart ? true:false} onClick={() => {
                                                value.addtocart(id);
                                                value.openmodel(id);
                                            }}>
                                                {inCart ? "In Cart" : "Add To Cart"}
                                            </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Productconsumer>
        );
    }
}
