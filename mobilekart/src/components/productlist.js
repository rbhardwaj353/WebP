import React, { Component } from 'react';
import Product from './Product';
import './style.css';
import {Productconsumer} from '../context';

export default class productlist extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <h1 className="title-text font-weight-bold">
                            Our Products
                        </h1>
                        <div className="row">
                            <Productconsumer>
                                {value =>{
                                    return value.products.map( product => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </Productconsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
