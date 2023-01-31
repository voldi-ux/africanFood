/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage/home";
import "./utils.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckOutPage from "./pages/checkout/checkoutPage";



function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/checkout" component={CheckOutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
