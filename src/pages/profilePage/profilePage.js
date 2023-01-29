import React from "react";
import NavBar2 from "../../components/navBar/navBar-2";
import "./profilePage.scss";
import Profile from '../../components/profile/profile'

const ProfilePage = () => {
  return <div className='profile-page'>
    <NavBar2 style='fixed'/>
    <Profile />
  </div>;
};

export default ProfilePage;
