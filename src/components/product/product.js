/** @format */

import React from "react";
import "./product.scss";


import {AiFillMinusCircle} from "react-icons/ai"
import {MdAddCircle} from "react-icons/md"


const Product = () => {
  return (
    <div className="product-container">
      <img src={require("../../assets/food/salad (3).png")} />
      <div className="heading-details">
        <h2 className="product-name">Salad</h2>

        <h2 className="product-price">R15 / kg</h2>
      </div>

      <p className="product-description">This is the African salad. Made with ingredients from the mother land</p>

      <h2 className="product-info">Quantity: 3</h2>
      <h2 className="product-info">Subtotal: R30</h2>

      <div className="product-buttons">
        <div className="button button-1">
          <AiFillMinusCircle color="#ffff" size={20} />
          <span>decrease</span>
        </div>
        <div className="button button-2">
          <MdAddCircle color="#ffff" size={20} />
          <span>increase</span>
        </div>
      </div>

      <button className="product-cart-button">Add to Cart</button>
    </div>
  );
};

export default Product;
