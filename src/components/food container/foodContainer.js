import React from "react";
import "./container.scss";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { addItemToWishlist, getWishlistItems } from "../../redux/wishlist/wishlist";


//using the price as an id
const FoodHolder = ({ image, price, product, setFood, setVisible, _id }) => {
  let itemIsInWishlist;
  const dispatch = useDispatch();
  const wishlistItems = useSelector(getWishlistItems);
  const toggleToWishlist = () => {
    dispatch(addItemToWishlist(product));
  };
  for (let i = 0; i < wishlistItems.length; i++) {
    if (wishlistItems[i]._id === _id) {
      itemIsInWishlist = true;
    }
  }

  return (
    <div className="food-holder">
      <div className="food-holder-top flex spb a-hz">
        <span>4.5</span>
        {itemIsInWishlist ? (
          <AiFillHeart
            className="heart red"
            onClick={() => {
              toggleToWishlist();
            }}
          />
        ) : (
          <AiOutlineHeart
            className={`heart`}
            onClick={() => {
              toggleToWishlist();
            }}
          />
        )}
      </div>
      <div className="food-holder-body">
        <img src={image} />
      </div>
      <h3 className="food-holder-price">R{price}</h3>
      <div className="food-holder-footer">
        <button
          onClick={() => {
            setFood(product);
            setVisible(true);
          }}
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodHolder;
