import React, { useEffect } from "react";
import MainButton from "../button/button";
import { getSubtotal } from "../../redux/cart/cart";
import "./cart.scss";
import CartItem from "./cartItem";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import {  AiOutlineShoppingCart } from "react-icons/ai";

const SideCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const subTotal = useSelector(getSubtotal);
  const history = useHistory();
  const renderItems = () => {
    if (!cartItems.length) {
      return (
        <div className="empty-png">
          <AiOutlineShoppingCart size={200} />
        </div>
      );
    }
    return cartItems.map((food) => {
      return <CartItem {...food} key={food.name}/>;
    });
  };
  useEffect(() => {

    const cartContainer = document.querySelector(".side-cart-container");
    const cartContent = document.querySelector(".side-cart-content");
    const close = document.querySelector(".close-btn");
    const placeOoderBtn = document.querySelector(".side-cart-footer");

    const hideCart = () => {
      cartContainer.style.transform = "translateX(100%)";
      cartContent.style.transform = "translateX(100%)";
    };
    cartContainer.addEventListener("click", (e) => {
      if (e.target === cartContainer) {
        hideCart();
      }
    });
    close.addEventListener("click", hideCart);
    const onPlaceorder = () => {
      if (cartItems.length) {
        hideCart();
        history.push("/checkout");
      }
    };
    placeOoderBtn.addEventListener("click", onPlaceorder);
    return () => {
      placeOoderBtn.removeEventListener("click", onPlaceorder);
      cartContainer.removeEventListener("click", (e) => {
        if (e.target === cartContainer) {
          hideCart();
        }
      });
      close.removeEventListener("click", hideCart);
    };
  });

  return (
    <div className="side-cart-container">
      <div className="side-cart-content">
        <div className="flex spb top-content">
          <span className="total">
            <strong>Sub Total</strong>: R{subTotal}
          </span>
          <span className="close-btn">&times;</span>
        </div>
        <div className="side-cart-item-container">{renderItems()}</div>
        <div className="side-cart-footer">
          <MainButton value="Checkout" style={` large py-3 ${cartItems.length ? "" : "disable"}`} />
        </div>
      </div>
    </div>
  );
};

export default SideCart;
