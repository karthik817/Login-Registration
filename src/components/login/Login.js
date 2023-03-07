import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../login/login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const proceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      // console.log("proceed")
      fetch("http://localhost:1234/karthik/")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (Object.keys(data).length === 0) {
            console.log(data, "data");
            alert("Please enter the valid User Name");
          } else {
            console.log(password,"password")
            console.log(data[0].password,"json_password");
            if (data[0].password === password || data[1].password === password ||data[2].password === password ) {
              sessionStorage.setItem("userName", userName);

              navigate("/");
            } else {
              
              alert("Please enter the valid details");
            }
          }
        })
        .catch((err) => {
          alert("Login failed due to :" + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    
    if (userName === null || userName === "") {
      result = false;
      alert("Please enter the Username");
    }
    if (password === null || password === "") {
      result = false;
      alert("Please enter the Password");
    }

    return result;
  };

  return (
    <div className="background_style" >
      <div  className="card_wrapper" >
        <form onSubmit={proceedLogin}>
          <div>
            <h2 className="heading_style  ">Login page</h2>
          </div>

          <div className="div_style">
            <label>
              UserName : 
            </label>
            <input
            className="no-outline"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your User name"
            />
          </div>

          <div className="div_style">
            <label>
              Password :
            </label>
            <input
              type="password"
              className="no-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
            />
          </div>

          <div>
            <button className="login_btn" type="submit">Login</button>
            </div>
            <div>
            <span className="register_btn">Don't have an account? </span><Link to={"/register"}>Register here</Link>
            </div>  
        </form>
      </div>
    </div>
  );
};
export default Login;
