/** @format */

import React, { useEffect, useState } from "react";
import { FoodCategories } from "../../data";
import CartItem from "../cart/cartItem";
import Footer from "../footer/footer";
import "./checkout.scss";
import { Form, FormControl, Col } from "react-bootstrap";
import MainBtn from "../button/button";
import { useSelector } from "react-redux";
import { getSubtotal } from "../../redux/cart/cart";
import { formatData } from "./formatData";
const CheckOut = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const subTotal = useSelector(getSubtotal);
  const [delivering, setDeliver] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    number: "",
    address1: "",
    address2: ""
  });
  const [invalidForm, setInvalidForm] = useState(false);

  const dfees = 25; // delivery fees
  const orderDetails = formatData(cartItems, formData, subTotal, dfees, delivering);

  const handleChange = (name, value) => {
    setFormData((prevState) => {
      prevState[name] = value;
      return { ...prevState };
    });
  };

  const renderItems = () => {
    return cartItems.map((food) => <CartItem {...food} key={food.name} />);
  };

  if (cartItems.length <= 0) {
    window.location.assign("/");
  }

  return (
    <>
      <div className="checkout flex">
        <div className="checkout-cart">{renderItems()}</div>
        <div className="checkout-detail">
          <div className="dilever-container">
            <button className={`${"deliver-button "}` + (delivering ? "selected" : false)} onClick={() => setDeliver(true)}>
              Should be delivered
            </button>
            <button className={`${"deliver-button "}` + (!delivering ? "selected" : false)} onClick={() => setDeliver(false)}>
              No delivery
            </button>
          </div>
          {invalidForm ? <h3 className="invalid-form-content">At least one of the form fields is invalid</h3> : false}
          <Form>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={formData["email"]}
                onChange={(e) => {
                  handleChange("email", e.target.value);
                }}
                isInvalid={invalidForm}
              />
            </Form.Group>

            <Form.Group controlId="formGridPhone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone number"
                name="number"
                value={formData["number"]}
                onChange={(e) => {
                  handleChange("number", e.target.value);
                }}
                isInvalid={invalidForm}
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                value={formData["address1"]}
                onChange={(e) => {
                  handleChange("address1", e.target.value);
                }}
                isInvalid={invalidForm}
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                placeholder="Apartment, studio, or floor"
                value={formData["address2"]}
                onChange={(e) => {
                  handleChange("address2", e.target.value);
                }}
                isInvalid={invalidForm}
              />
            </Form.Group>
            <Form.Group>
              <ul className="detail-list">
                <li>
                  <strong>Delivery Fee</strong>
                  <h2>{delivering ? "R25" : "No delivery fees"}</h2>
                </li>
                <li>
                  <strong>Sub total</strong>
                  <h2>R {subTotal}</h2>
                </li>
                <li>
                  <strong>Total</strong>
                  <h2>R{delivering ? subTotal + dfees : subTotal}</h2>
                </li>
              </ul>
            </Form.Group>
          </Form>
          <MainBtn
            value="Place order"
            style=" large"
            onClick={() => {
              if (formData.email === "" || formData.number.length != 10 || formData.address1 === "") {
                setInvalidForm(true);
                return;
              }

              let resp = prompt("Please make sure that your details are correct \n" + orderDetails + "\n Type yes(y) to continue");

              resp = resp ? resp.trim().toLowerCase() : resp;

              //open the the content in whatsapp
              if (resp === "yes" || resp === "y") {
                //encodeURI converts the string passed to it to a valid uri string. it replaces all invalid charecters from our string with special charecters that are supposed to in the url ie. \n or space character is replaced with %20
                window.location.assign(encodeURI(`https://wa.me/${27629114175}/?text=${orderDetails}`));
              }
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckOut;
