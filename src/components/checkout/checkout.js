import React from "react";
import { FoodCategories } from "../../data";
import CartItem from "../cart/cartItem";
import Footer from '../footer/footer'
import "./checkout.scss";
import { Form, FormControl, Col } from "react-bootstrap";
import MainBtn from "../button/button";
import {useSelector} from 'react-redux'
import { getSubtotal } from "../../redux/cart/cart";
const CheckOut = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const subTotal = useSelector(getSubtotal)
  const renderItems = () => {
    return cartItems.map((food) => <CartItem {...food} />);
  };
  return (
    <>
      <div className="checkout flex">
        <div className="checkout-cart">{renderItems()}</div>
        <div className="checkout-detail">
          <Form>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formGridPhone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="number" placeholder="Phone number" />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>
            <Form.Group>
              <ul className="detail-list">
                <li>
                  <strong>Delivery Fee</strong>
                  <h2>R25</h2>
                </li>
                <li>
                  <strong>Sub total</strong>
                  <h2>R {subTotal}</h2>
                </li>
                <li>
                  <strong>Total</strong>
                  <h2>R{subTotal + 25}</h2>
                </li>
              </ul>
            </Form.Group>
          </Form>
          <MainBtn value="Place order" style="black large" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckOut;
