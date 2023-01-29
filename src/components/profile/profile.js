//the profile page should have the user's dashboard. it should show the amount of orders the user has, name and surname, money spent, current orders, logout button, last order date and amount. it should have two screens; one for the dashboard and one for the current order.

import React,{useEffect} from "react";
import "./profile.scss";
import {
  AiOutlineMail,
  AiOutlineDollar,
  AiTwotoneWallet,
} from "react-icons/ai";
import MainButton from "../button/button";
import { Spinner } from "react-bootstrap";
import {profileImg} from '../../data'
import {useSelector} from 'react-redux'
import { getUser } from "../../redux/user/user";

const Profile = () => {
  const user = useSelector(getUser)

  useEffect(()=> {
    if(!user) {
       window.location.assign('/')
    }
  })

   if (!user) {
      return window.location.assign("/");
   }
  return (
    <div className="profile">
   
    </div>
  );
};

export default Profile;
