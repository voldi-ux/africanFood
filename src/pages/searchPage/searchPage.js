//the search page should have the navbar similar to the one in the checkout page but it should have a search imput in the navbar instead of the logo.

import React from "react";
import "./searchPage.scss";
import NavBar2 from "../../components/navBar/navBar-2";
import SearchComponent from "../../components/search/search";

const SearchPage = () => {
  return<div>
    <NavBar2 search={true}/>
    <SearchComponent />
  </div>
};

export default SearchPage;