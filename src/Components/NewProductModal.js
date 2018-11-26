import React, { Component } from 'react';
import axios from 'axios';

class NewProductModal extends Component {
  constructor(props) {
    super();
    this.state = {
      addFail: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:51176/api/products", {
      Name: event.target.productName.value,
      Desc: event.target.productDesc.value,
      Quantity: event.target.productQty.value
    }).then((res) => {
      if(res.data) {
        this.props.updateProducts(true);
        this.toggleFail(false);
      } else {
        this.toggleFail(true);
      }
    })
  }

  toggleFail = (failBool) => {
    this.setState(
      {
        addFail: failBool,
      }
    )
  }

  render() {
    return (
      <div id="newProductModal">
        <form onSubmit={this.handleSubmit}>
        {this.state.addFail ? <h4 id="addFail">A product with that name already exists. Please use a different name</h4> : null}
          <button className="close" onClick={this.props.closeModal}>x</button>
          <label htmlFor="productName">Name:</label>
          <input type="text" placeholder="Product Name" id="productName" />

          <label htmlFor="productDesc">Description:</label>
          <input type="text" placeholder="Product Description" id="productDesc" />

          <label htmlFor="productQty">Quantity:</label>
          <input type="text" placeholder="Product Quantity" id="productQty" />

          <input type="submit" id="form-submit" value="Add Product" />
        </form>
      </div>
    )
  }
}

export default NewProductModal;