import React from "react";
import NavBar2 from "../../components/navBar/navBar-2";
import Wishlist from "../../components/wishlist/wishlist";
import "./wishlistPage.scss";

const wishListPage = () => {
  return (
    <div className="wishListPage">
      <NavBar2  />
      <Wishlist />
    </div>
  );
};

export default wishListPage;
