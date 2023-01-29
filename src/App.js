/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage/home";
import "./utils.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckOutPage from "./pages/checkout/checkoutPage";
import WishListPage from "./pages/wishlistPage/wishlistPage";
import ProfilePage from "./pages/profilePage/profilePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import SearchPage from "./pages/searchPage/searchPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addData } from "./redux/appData/appData";
import { FoodCategories } from "./data";

const URL = "http://localhost:4000";

function App() {
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(addData(FoodCategories));
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/checkout" component={CheckOutPage} />
        <Route exact path="/wishlist" component={WishListPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/authentication/:type" component={AuthPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
