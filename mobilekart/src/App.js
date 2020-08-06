import React from 'react';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import productlist from './components/productlist';
import details from './components/details';
import cart from './components/cart';
import nochange from './components/nochange';
import Model from './components/Model';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={productlist}></Route>
        <Route path="/details" component={details}></Route>
        <Route path="/cart" component={cart}></Route>
        <Route component={nochange}></Route>
      </Switch>
      <Model />
    </React.Fragment>
  );
}

export default App;
