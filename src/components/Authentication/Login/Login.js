import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { RiLock2Line } from "react-icons/ri";
import "./login.scss";
import toast, { Toaster } from "react-hot-toast";
import {Data} from "../../Data/data"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const initialValue = { username: "", password: "" };
  const [loginData, setLoginData] = useState(initialValue);
const navigate = useNavigate()
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {username, password} = loginData;

    const user = Data.users.find((user)=> user.username === username && user.password === password)

    if (user) {
      toast.success("Login successful!");
      localStorage.setItem("user", JSON.stringify(user.data));
      setTimeout(()=>{
        navigate("/dashboard")
      }, 1000)
    } else {
      toast.error("Invalid username or password!!");
    }
  };


  return (
    <>
      <div className="login-container">
        <div className="heading">
          <h1>Login</h1>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="info">
              <p>
                <FaRegUser />
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={loginData.email}
                  onChange={handleChange}
                />
              </p>
              <p>
                <RiLock2Line />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                />
              </p>
            </div>
            <div className="btn-container">
              <button type="submit">Log in</button>
            </div>
          </form>
        </div>
      </div>

      <Toaster
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
            width: "350px",
            fontSize: "18px",
          },
        }}
      />
    </>
  );
};

export default Login;
