import React from "react";
import "./auth.scss";
import image from "../../assets/drone.avif";
import Login from "./Login/Login";
import { useGlobal } from "../Context/Context";
const Auth = () => {
  const { showRegister } = useGlobal();

  return (
    <>
      <section className="authentication">
        <div className="left-container">
          <div className="content-container">
            <div className="image-container">
          
              <img src={image} className="avatar" alt="" />
            </div>
            <div className="content">
              <p>Welcome Aboard My Friends</p>
              <p>Elevate Your Fleet Management Experience</p>
            </div>
          </div>
        </div>
        <div className="right-container">
          <Login />
        </div>
      </section>
    </>
  );
};

export default Auth;
