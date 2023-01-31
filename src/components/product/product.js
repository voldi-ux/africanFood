/** @format */

import React from "react";
import "./product.scss";


import {AiFillMinusCircle} from "react-icons/ai"
import {MdAddCircle} from "react-icons/md"
import { useSelector, useDispatch } from "react-redux";
import { decrementItem, incrementItem, removeItem , addItem } from "../../redux/cart/cart";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const itemInCart = findItemIncart(cartItems, product);


  return (
    <div className="product-container">
      <img src={product.image} />
      <div className="heading-details">
        <h2 className="product-name">{product.name}</h2>

        <h2 className="product-price">R{product.price} </h2>
      </div>

      <p className="product-description">This is the African salad. Made with ingredients from the mother land</p>

      <h2 className="product-info">Quantity: {itemInCart ? itemInCart.qty : 0}</h2>
      <h2 className="product-info">Subtotal: R{itemInCart ? itemInCart.qty * itemInCart.price : 0}</h2>

      <div className="product-buttons">
        <div
          className="button button-1"
          onClick={() => {
            dispatch(decrementItem(product.name));
          }}
        >
          <AiFillMinusCircle color="#ffff" size={20} />
          <span>decrease</span>
        </div>
        <div
          className="button button-2"
          onClick={() => {
            dispatch(incrementItem(product.name));
          }}
        >
          <MdAddCircle color="#ffff" size={20} />
          <span>increase</span>
        </div>
      </div>

      <button
        className="product-cart-button"
        onClick={() => {
          if (!itemInCart) {
            dispatch(
              addItem({
                name: product.name,
                price: product.price,
                qty: 1
              })
            );
          } else {
            alert("The item you trying to add is already in cart");
          }
        }}
      >
        {" "}
        {!itemInCart ? "Add to Cart" : "Already In Cart"}
      </button>
    </div>
  );
};



function findItemIncart(cart, item) {
  const foundItem = cart.find(cartItem => cartItem.name == item.name);

  if (foundItem) {
     return foundItem
  }

  return false;
}
export default Product;
