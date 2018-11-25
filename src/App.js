import React, { Component } from 'react';
import Products from './Components/Products';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Product Catalog</h1>
        <Products />
      </div>
    );
  }
}

export default App;
