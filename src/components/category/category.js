import React, { useEffect } from "react";
import FoodHolder from "../food container/foodContainer";
import "./category.scss";
import { useHistory } from "react-router";
//the category model should look like this categoryName(i.e burgers): {items:[{burgers}]}

const Category = ({ title, link, items, setFood, setVisible, scroll }) => {
  const history = useHistory();
  useEffect(() => {
    if (scroll) {
      var el = document.querySelector(`.${title}`);
      if (!el) el = document.querySelector(`.${title.split(' ')[1]}`);
      el.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "start",
      });
    }
  }, [title, link]);
  const renderItems = () => {
    return items.map((food) => <FoodHolder {...food} product={food} setFood={setFood} setVisible={setVisible} key={food.price} />);
  };
  return (
    <div className={`category-container p-3  ${title}`}>
      <div className={`category-top-content flex spb px-5`}>
        <h2>{title}</h2>
        {link ? <span onClick={() => history.push(`/category/${title}`)}>{link} &rarr;</span> : null}
      </div>
      <div className={`category-content`}>{renderItems()}</div>
    </div>
  );
};

export default Category;
