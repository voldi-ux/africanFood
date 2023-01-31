import React from "react";
import { decrementItem, incrementItem, removeItem } from "../../redux/cart/cart";
import { useDispatch } from "react-redux";
import "./cart.scss";


import { AiFillMinusCircle } from "react-icons/ai";
import { MdAddCircle } from "react-icons/md";



const CartItem = ({ name, price, qty,  }) => {
  const dispatch = useDispatch();
  return (
    <div className="side-cart-item  ">
      <span className="close" onClick={() => dispatch(removeItem(name))}>
        X
      </span>
      <div className="side-cart-item-content">
        <table className="side-cart-item-content-top  spb">
          <tbody>
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
          </tbody>
        </table>
        <div className="side-cart-item-content-button">
          <div className="addDecrease remove" onClick={() => dispatch(decrementItem(name))}>
            <AiFillMinusCircle color="#ffff" size={20} />
            <span>decrease</span>
          </div>
          <div className="addDecrease add" onClick={() => dispatch(incrementItem(name))}>
            <MdAddCircle color="#ffff" size={20} />
            <span>increase</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
