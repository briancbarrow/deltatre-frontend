import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Products from './Components/Products';
import NewProductModal from './Components/NewProductModal';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      modalVisible: false,
      products: []
    }
  }
  
  componentWillMount() {
    this.updateProducts(false);
  }

  updateProducts = (toggleBool) => {
    axios.get("http://localhost:51176/api/products")
      .then(res => {
        this.setState(
          {
            products: res.data          
          }
        )
      })
    if(toggleBool) {
      this.toggleModal();
    }
  }



  toggleModal = (e) => {
    if(e) {
      e.preventDefault();
    }
    this.setState(
      {
        modalVisible: !this.state.modalVisible
      }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Product Catalog</h1>
        <button id="addProduct" onClick={this.toggleModal}>Add New Product</button>
        
        <Products products={this.state.products}/>
        {this.state.modalVisible ? <NewProductModal updateProducts={this.updateProducts} closeModal={this.toggleModal}/> : null}
      </div>
    );
  }
}

export default App;
