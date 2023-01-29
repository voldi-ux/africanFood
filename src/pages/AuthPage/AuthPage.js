import React from "react";
import Auth from "../../components/Auth/Auth";
import "./AuthPage.scss";

const AuthPage = ({match}) => {

  return (
    <div className="authPage-container">
      <Auth type={match.params.type}/>
    </div>
  );
};

export default AuthPage;
