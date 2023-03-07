import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../home/home.css";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let userName = sessionStorage.getItem("userName");
    if (userName === "" || userName === null) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div >
      <div className="logout_btn">
        
        <Link to="/login" className="link_btn">Log out</Link>
      </div>
      <h2 className="heading_style">Welcome to Dashboard </h2>

      <div className="card_wrapper"><h1 className="warning">Warning!!</h1>
      <p>Construction work is on progress</p>
      <Link to="/login"><button className="go_back">Please go back</button></Link>
      </div>
    </div>
  );
};

export default Home;
