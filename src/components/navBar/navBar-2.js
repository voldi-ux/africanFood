/** @format */

import React, { useEffect } from "react";
import Logo from "../../assets/logo/logo.png";
import { useHistory } from "react-router";
import { InputGroup, FormControl } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import "./navBar.scss";

const NavBar2 = ({ search, style }) => {
  const history = useHistory();

  return (
    <nav className={`nav-2 flex spb ${style}`}>
      <span className="arrow" onClick={() => history.push("/")}>
        &larr;
      </span>

      {search ? (
        <InputGroup className=" ">
          {/* 
     when the search input is focused on, push history to /search? and render a search page
    */}
          <FormControl autoFocus className="nav-search-input shadow-none" placeholder="what are you craving for?" aria-label="what are you craving for?" aria-describedby="basic-addon1" />
        </InputGroup>
      ) : (
        <div className="nav-2-center flex a-hz">
          <img src={Logo} alt="logo" />
          <h3>AfricanFood</h3>
        </div>
      )}
      <div></div>
    </nav>
  );
};

export default NavBar2;
