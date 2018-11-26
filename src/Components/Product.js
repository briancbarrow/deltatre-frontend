import React, { Component } from 'react';

const Product = (props) => {
  return (
    <div className="product"> 
      <h4>{props.info.name}</h4>
      <p className="product-desc"><strong>Desc:</strong> {props.info.desc}</p>
      <p className="product-qty"><strong>Qty:</strong> {props.info.quantity}</p>
    </div>
  )
}

export default Product;