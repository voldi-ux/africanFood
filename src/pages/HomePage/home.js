import React from "react";
import SideCart from "../../components/cart/sideCart";
import Footer from "../../components/footer/footer";
import MainHeader from "../../components/header/header";
import Main from "../../components/main/main";
import MainNav from "../../components/navBar/navBar";

const HomePage = () => {
  return (
    <>
      <MainNav />
      <MainHeader />
      <Main />
      <Footer />
      <SideCart />
    </>
  );
};

export default HomePage;
