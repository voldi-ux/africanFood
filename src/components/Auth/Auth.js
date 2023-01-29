import React, { useEffect } from "react";
import "./Auth.scss";
import Logo from "../../assets/logo/logo.png";
import MainButton from "../button/button";
import { getUser, login } from "../../redux/user/user";
import { useDispatch, useSelector } from "react-redux";
const URI = "http://localhost:4000";

const Auth = ({ type }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const heading = type === "signin" ? "Sign in to VeeEat" : "Sign up with VeeEat";
  const titleBtn = type === "signin" ? "Sign in" : "Sign up";
  const linkHeading = type === "signin" ? "Do not have an account?" : "Already have anccount?";

  useEffect(() => {
    if (user) {
      // should uncomment this when data persistent is enabled 
      // window.location.assign("/");
    }
  });
  const logInUser = async () => {
    try {
      const resp = await fetch(`${URI}/signin/?name=voldi`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "voldimuyumba@gmail.com",
          password: "xxxx",
        }),
      });
      const data = await resp.json();
      if (data.st === "okay") {
        //return dispatch login user
        console.log(data.user);
        return dispatch(login(data.user));
      }
      throw Error(data.st);
    } catch (error) {
      console.log(error.message);
    }
  };
  const renderInputDetails = () => {
    if (type !== "signin") {
      return (
        <>
          <input autoComplete={false} className="auth-input" type="text" placeholder="Name" name="Name" />
          <input autoComplete={false} className="auth-input" type="text" placeholder="Surname" name="surname" />
        </>
      );
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-center flex a-hz">
        <img src={Logo} alt="logo" />
        <h3>VeeEat</h3>
      </div>
      <div className="auth-heading">
        <h1>{heading}</h1>
      </div>
      <div className="auth-content">
        {renderInputDetails()}
        <input autoComplete={false} className="auth-input" type="email" placeholder="Email" name="email" />
        <input autoComplete={false} className="auth-input" type="password" placeholder="Password" name="password" />
        {type !== "signin" ? <input autoComplete={false} className="auth-input" type="password" placeholder="Confirm password" name="password" /> : null}
        <h4>
          {linkHeading} <a href={type == "signin" ? "/authentication/signup" : "/authentication/signin"}>{type === "signin" ? "sign up instead" : "sign in instead"}</a>
        </h4>
        <MainButton value={titleBtn} style="black mb-5" onClick={() => logInUser()} />
      </div>
    </div>
  );
};

export default Auth;
