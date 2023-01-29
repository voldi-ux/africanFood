import React, { useEffect } from "react";
import MainButton from "../button/button";
import { FoodCategories } from "../../data";
import { getSubtotal } from "../../redux/cart/cart";
import "./cart.scss";
import CartItem from "./cartItem";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
//to hide and show the side cart, toggle  a show class to the component

//the cart item data should look like this {name:'cod', id:'dafsfa, qty:4, price:34, image:'sadsfasdk'}

const SideCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const subTotal = useSelector(getSubtotal);
  const history = useHistory();
  const renderItems = () => {
    if (!cartItems.length) {
      return (
        <div className="empty-png">
          <img src={require("../../assets/emptyCart.png").default} alt="empty cart" />
        </div>
      );
    }
    return cartItems.map((food) => {
      return <CartItem {...food} />;
    });
  };
  useEffect(() => {
    console.log(cartItems);

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
          <MainButton value="Place order" style={`black large py-3 ${cartItems.length ? "" : "disable"}`} />
        </div>
      </div>
    </div>
  );
};

export default SideCart;
