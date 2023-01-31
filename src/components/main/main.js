import React, { useState, useEffect } from "react";

import { Foods } from "../../data";
import "./main.scss";



import { useHistory, useRouteMatch } from "react-router";
import { useSelector } from "react-redux";
import Product from "../product/product";


const Main = () => {
  let match = useRouteMatch();
  const [showAlert, setAlert] = useState(true);
  const [visible, setVisible] = useState(false);
  const [food, setFood] = useState(null);
  const history = useHistory();


  const renderProducts = () => {
    return Foods.map((product) => <Product product={product } key={product.name}/>)
  }
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

      <h1 id="foods">We have all the good african foods you are looking for</h1>
    
      <div className="main-products">
        {renderProducts() }

      </div>
 
    </main>
  );
};

export default Main;
