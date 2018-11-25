import React, { Component } from 'react';

const Product = (props) => {
  return (
    <div className="product"> 
      <h4>{props.info.name}</h4>
    </div>
  )
}

export default Product;