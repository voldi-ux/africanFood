/** @format */

import React, { useEffect } from "react";
import { Zoom } from "react-slideshow-image";
import image from "../../assets/slides/image (1).jpg";
import image2 from "../../assets/slides/image (2).jpg";
import image3 from "../../assets/slides/image (3).jpg";
import "react-slideshow-image/dist/styles.css";
import "./header.scss";
import { useHistory } from "react-router";

const MainHeader = () => {
  const history = useHistory();
  const paths = ["../../assets/slides/image (1).jpg", "../../assets/slides/image (2).jpg", "../../assets/slides/image (3).jpg"];
  const props = {
    scale: 1.4,
    indicators: false,
    arrows: false
  };
  const orderBtnClick = (link) => {
    history.push(link);
  };

  return (
    <header>
      <Zoom {...props}>
        <div className="slide-item flex a-cl jc" style={{ width: "100vw", backgroundImage: ` linear-gradient(320deg, rgba(64,158,42,1) 0%, rgba(255,255,255,0) 100%) ,url('${image3}')` }}>
          <div>
            <h1>Miss your work, but don't miss this African cuisine</h1>
            <button onClick={() => orderBtnClick("/category/salad")}>Order now</button>
          </div>
        </div>
        <div className="slide-item flex a-cl jc" style={{ width: "100vw", backgroundImage: ` linear-gradient(320deg, rgba(64,158,42,1) 0%, rgba(255,255,255,0) 100%) ,url('${image2}') ` }}>
          <h1>African food is not a cuisine, it's a cultural adventure</h1>
          <button onClick={() => orderBtnClick("/category/pizza")}>Order now !!</button>
        </div>
        <div className="slide-item flex a-cl jc" style={{ width: "100vw", backgroundImage: ` linear-gradient(320deg, rgba(64,158,42,1) 0%, rgba(255,255,255,0) 100%) ,url('${image}')` }}>
          <h1>If you want to take me on a date, bring me African food</h1>
          <button onClick={() => orderBtnClick("/category/burger")}>Order now</button>
        </div>
      </Zoom>
    </header>
  );
};

export default MainHeader;
