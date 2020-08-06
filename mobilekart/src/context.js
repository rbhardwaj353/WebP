import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

const Productcontext = React.createContext();

class Productprovider extends Component {
    state ={
        products:[],
        detail:detailProduct,
        cart:[],
        modelopen : false,
        modelproduct : detailProduct,
    };
    componentDidMount(){
        this.setproducts();
    };
    setproducts = () =>{
        let tproducts = [];
        storeProducts.forEach(item =>{
            const singleitem = {...item};
            tproducts = [...tproducts,singleitem];
        });
        this.setState(() =>{
            return { products : tproducts};
        });
    };

    getitem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handledetail = (id) =>{
        const product = this.getitem(id);
        this.setState(() => {
            return {detail : product}
        })
    };
    addtocart = id =>{
        let tproducts = [...this.state.products];
        const index = tproducts.indexOf(this.getitem(id));
        const product = tproducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return {products:tproducts,cart:[...this.state.cart,product]};
        },() => {
            console.log(this.state);
        });
    };
    
    openmodel = id =>{
        const product = this.getitem(id);
        this.setState(() => {
            return {modelproduct : product,modelopen:true }
        })
    };

    closemodel = () =>{
        this.setState(()=>{
            return {modelopen:false}
        })
    };

    render() {
        return (
            <Productcontext.Provider value={{
               ...this.state,
               handledetail: this.handledetail,
               addtocart: this.addtocart,
               openmodel: this.openmodel,
               closemodel: this.closemodel
            }}>
                {this.props.children}
            </Productcontext.Provider>
        )
    }
}

const Productconsumer = Productcontext.Consumer;

export {Productprovider, Productconsumer};
