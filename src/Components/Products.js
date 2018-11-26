import React, {Component} from 'react';
import axios from 'axios';

import Product from './Product';

class Products extends Component {

  render() {
      return (
          <div id="products">
            {
              this.props.products.length == 0 ? <h3>Sorry, no products found in catalog</h3> : (
                this.props.products.map((p, i) => {
                  return <Product key={`${p.name}-${i}`} info={p} />
                })
              )
            }
          </div>
      )
  }
}

export default Products;