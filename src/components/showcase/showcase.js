import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./showcase.scss";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.js";

const URL_Image = "http://localhost:4000";

//on add to cart, send the id, price, quantity and name of the product to the cart
const ShowCase = (prop) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const { name, _id, price, image, setVisible, visible, setFood } = prop;
  let [qty, setQty] = useState(1);

  const addItemToCart = () => {
    const findItem = cartItems.find((item) => item._id === _id);
    const item = {
      name,
      price,
      image,
      _id,
      qty,
    };
    if (!findItem) {
      dispatch(addItem(item));

      setQty(1); /*resets the quantity value to one*/

      return setVisible(false);
    }
    alert("the item is already in cart");
    setQty(1); /*resets the quantity value to one*/

    setVisible(false);
    return;
  };;
  return (
    <Modal
      show={visible}
      onHide={() => {
        setQty(1);
        setVisible(false);
      }}
    >
      <div className=" p-4 show-case">
        <img src={`${URL_Image}/images/${image}`} />
        <div className="flex  spb">
          <h1>{name}</h1>
          <h2>R{price * qty}</h2>
        </div>

        <div className="flex">
          <button
            onClick={() =>
              setQty((prev) => {
                if (prev > 1) {
                  return prev - 1;
                }
                return prev;
              })
            }
            className="addDecrease-btn remove"
          >
            -
          </button>
          <button onClick={() => setQty((prev) => prev + 1)} className="addDecrease-btn add">
            +{" "}
          </button>
        </div>

        <button
          className="modal-button"
          onClick={() => {
            addItemToCart();
          }}
        >
          add {qty} to cart
        </button>
      </div>
    </Modal>
  );
};

export default ShowCase;
