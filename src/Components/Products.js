import React, {Component} from 'react';
import axios from 'axios';

import Product from './Product';

class Products extends Component {
  constructor(props) {
    super();
    this.state = {
      products: []
    }
  }

  componentWillMount() {
    axios.get("http://localhost:51176/api/products")
      .then(res => {
        console.log(res);
        this.setState(
          {
            products: res.data          
          }
        )
      })
  }

  render() {
      return (
          <div id="products">
            {
              this.state.products.length == 0 ? <h3>Sorry, no products found in catalog</h3> : (
                this.state.products.map(p => {
                  return <Product info={p} />
                })
              )
            }
          </div>
      )
  }
}

export default Products;