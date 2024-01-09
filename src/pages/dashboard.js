import React from "react";
import "./login";
import './login.css';
import { useNavigate } from "react-router-dom";
import Images from "../assets/images/chain.svg"
import RiskImage  from '../assets/images/riska-logo.svg';  // Import specific image file(s) if needed
import  userImage from '../assets/images/user.svg';  // Import specific image file(s) if needed
import lockImage from '../assets/images/lock.svg';  // Import specific image file(s) if needed
import outImage from '../assets/images/out.svg';  // Import specific image file(s) if needed

function DashBoard() {
  const navigate = useNavigate();

  const handleCustomersClick = () => {
    // Navigate to the "/user" route
    navigate("/user");
  };
  return (
   <div>
         <header>
          <div className="chain"> <img src={Images}/></div>
          <nav className="navbar-expand-lg">
            <div className="container-fluid"><a href="#"><img src={RiskImage}/></a></div>
          </nav>
			<div className="dropdown"><button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><b>Welcome</b> Brenton Baker </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
             <li><a className="dropdown-item" href="#"><img src={userImage}/> Account</a></li>
              <li><a className="dropdown-item" href="#"><img src={lockImage}/> Change Password</a></li>
              <li><a className="dropdown-item" href="#"><img src={outImage}/> Logout</a></li>
            </ul>
          </div>
          </header>
          <section className="ptb-110">
            <div className="container">
              <h1>Welcome to Guardian <br /> Admin Portal</h1>
              <div className="addition">
                <a href="#">Onboarding</a>
                <a href="#" onClick={handleCustomersClick}>Customers</a>
                <a href="#">Alerts</a>
                <a href="#">
                  Logout <img src={require("../assets/images/out.svg").default} alt="" />
                </a>
              </div>
              <h2 className="text-primary mt-5">Customer onboarding</h2>
              <div className="bg-white border-radius-15 information">
                <h5 className="text-primary">Company information</h5>
                <p>Business Name</p>
                <p>Business Address</p>
                <p>Website</p>
                <p>Industry</p>
              </div>
              <div className="bg-white border-radius-15 information">
                <h5 className="text-primary">Contact information</h5>
                <p>Contact Name</p>
                <p>Contact Number</p>
                <p>Contact Email</p>
              </div>
              <div className="submit-btn">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </section>
          <footer></footer>
		  </div>
       
  );
}

export default DashBoard;
