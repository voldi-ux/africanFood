import React from "react";
import { decrementItem, incrementItem, removeItem } from "../../redux/cart/cart";
import "./cart.scss";
import { useDispatch } from "react-redux";

const URL_Image = "http://localhost:4000";
//price is temporarily used an id for  the item.
const CartItem = ({ name, price, image, qty, _id }) => {
  const dispatch = useDispatch();
  return (
    <div className="side-cart-item flex a-hz ">
      <span className="close" onClick={() => dispatch(removeItem(_id))}>
        X
      </span>
      <img src={`${URL_Image}/images/${image}`} />
      <div className="side-cart-item-content">
        <table className="side-cart-item-content-top  spb">
          <tr>
            <td>
              <h2>{name}</h2>
            </td>
            <td>
              <h2>
                R{price} &times; {qty}
              </h2>
            </td>
          </tr>
        </table>
        <div className="side-cart-item-content-bottom">
          <button className="addDecrease remove" onClick={() => dispatch(decrementItem(_id))}>
            -
          </button>
          <button className="addDecrease add" onClick={() => dispatch(incrementItem(_id))}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
