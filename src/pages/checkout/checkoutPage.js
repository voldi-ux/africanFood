import React from "react";
import CheckOut from "../../components/checkout/checkout";
import "./checkoutPage.scss";
import NavBar2 from '../../components/navBar/navBar-2'
const CheckOutPage = () => {

  return (
    <div id="checkout-container">
      <NavBar2 />
      <div className="text-center my-5">
        <h1>YOU HAVE ARE CHECKING OUT NOW</h1>
      </div>
      <CheckOut />
    </div>
  );
};

export default CheckOutPage;
