import React, { useState, useEffect } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { useMatch } from "react-router";
import { Route } from "react-router-dom";
//images
import allimg from "../../assets/images/all-1.png";
import burger from "../../assets/images/burger-1.png";
import pizza from "../../assets/images/pizza-1.png";
import alcohol from "../../assets/images/wine.png";
import drink from "../../assets/images/drink.png";
import salad from "../../assets/images/salad.png";
import "./main.scss";
import FoodHolder from "../food container/foodContainer";
import ShowCase from "../showcase/showcase";
import Category from "../category/category";
import { useHistory, useRouteMatch } from "react-router";
import { useSelector } from "react-redux";
import Product from "../product/product";

const Main = () => {
  let match = useRouteMatch();
  const [showAlert, setAlert] = useState(true);
  const [visible, setVisible] = useState(false);
  const [food, setFood] = useState(null);
  const history = useHistory();
  const FoodCategories = useSelector((state) => state.data.data);

  const renderContent = () => {
    let categoriesData = [];
    for (let key in FoodCategories) {
      // return FoodCategories.map(food => <FoodHolder {...food} product={food} setFood={setFood} />)
      categoriesData.push(<Category key={key} title={key} items={FoodCategories[key].slice(0, 5)} setFood={setFood} setVisible={setVisible} link="view all" />);
    }
    return categoriesData;
  };

  const renderSingleCategory = (category) => {
    return <Category items={FoodCategories[category]} setFood={setFood} setVisible={setVisible} title={category} scroll={true} />;
  };


  return (
    <main>
      {showAlert ? (
        <div className="main-alert">
          <span> We only deliver within a radius of 25km </span> <img src={require("../../assets/bike-2.png")} alt="delivery-logo" />
          <span className="main-alert-close" onClick={() => setAlert(false)}>
            &times;
          </span>
        </div>
      ) : null}

      <h1>We have all the good african foods you are looking for</h1>
    
      <div className="main-products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />

      </div>
 
    </main>
  );
};

export default Main;
