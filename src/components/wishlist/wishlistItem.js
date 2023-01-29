import React from "react";
import "./wishlist.scss";
import { useDispatch } from "react-redux";
import { removeItemFromWishlist } from "../../redux/wishlist/wishlist";
import { addItem } from "../../redux/cart/cart";

const URL_Image = "http://localhost:4000";
//the price should be replaced with an id. NB:
const WishListItem = ({ name, price, image, _id }) => {
  const dispatch = useDispatch();
  
  const removeFromWishlist = () => {
    dispatch(removeItemFromWishlist(_id));
  };

  const moveToCart = () => {
    dispatch(addItem({ name, price, image, qty: 1, _id }));
    dispatch(removeItemFromWishlist(_id));
  };

  return (
    <div className="wishlist-item-container flex spb">
      <img className="wishlist-item-image" src={`${URL_Image}/images/${image}`} alt={name} />
      <table className="wishlist-item-detail">
        <tr>
          <td>
            <h1>{name}</h1>
          </td>
          <td>
            <h2>R {price}</h2>
          </td>
        </tr>
      </table>
      <div className="wishlist-item-buttons flex">
        <button className="wishlist-item-remove-btn" onClick={removeFromWishlist}>
          Remove
        </button>
        <button className="wishlist-item-add-btn" onClick={moveToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default WishListItem;
