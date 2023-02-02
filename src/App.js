/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage/home";
import "./utils.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckOutPage from "./pages/checkout/checkoutPage";

function App() {
  return (
    //process.env.P... will contain the base url
    // github pages server will set it to /africanFood
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/checkout" component={CheckOutPage} />
        <Route path={'/'} exact component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
