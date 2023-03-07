import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../register/register.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("male");

  // console.log(userName, "UserName")
  // console.log(password, "Pass")
  const navigate = useNavigate();

  const isValidate = () => {
    let isProceed = true;
    let errormessage =
      "Please enter the values in the missing fields, such as : ";

    if (userName == null || userName === "") {
      isProceed = false;
      errormessage += " Username ";
    }
    if (password == null || password === "") {
      isProceed = false;
      errormessage += " Password ";
    }
    if (fname == null || fname === "") {
      isProceed = false;
      errormessage += " Full Name ";
    }
    if (mail == null || mail === "") {
      isProceed = false;
      errormessage += " E-mail ";
      console.log("error");
    }
    if (phone == null || phone === "") {
      isProceed = false;
      errormessage += " Phone-number ";
    }

    if (gender == null || gender === "") {
      isProceed = false;
      errormessage += " Gender ";
    }

    if (!isProceed) {
      alert(errormessage);
    }

    return isProceed;
  };

  const handleSubmit = (e) => {
    if (isValidate()) {
      e.preventDefault();
      let obj = { userName, password, fname, mail, phone, gender };
      // console.log(obj, "OBJ")

      fetch("http://localhost:1234/karthik", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(obj),
      })
        .then((res) => {
          alert("User account is created successfully");
          navigate("/login");
        })
        .catch((err) => {
          alert("Error : " + err.message);
        });
    }
  };

  return (
    <div>
      <div className="card_wrapper">
        <form onSubmit={handleSubmit}>
          <h3 className="heading_style"> Registration Form</h3>

          <div>
            <label>
              User Name 
            </label>
            <input
            className="no-outline"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
            />
           
          </div>

          <div>
            <label>
              Password 
            </label>
            <input
            className="no-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>

          <div>
            <label>
              Full Name 
            </label>
            <input
            className="no-outline"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              type="text"
            />
          </div>

          <div>
            <label>
              Email 
            </label>
            <input
            className="no-outline"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              type="email"
            />
          </div>

          <div>
            <label>
              Phone no 
            </label>
            <input
            className="no-outline"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              maxLength={10}
            />
          </div>

          <div>
            <label >
              Gender 
            </label>
            <input
            
              type="radio"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
              value="male"
            />
            <span>Male</span>
            <input
              type="radio"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
              value="female"
            />
            <span>Female</span>
          </div>
          <div>
            <button className="login_btn" type="submit">Register</button>
            
          </div>
          <div >
          <span>Have an account? </span><Link to={"/login"}>Log in</Link>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default Register;
