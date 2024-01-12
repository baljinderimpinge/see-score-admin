import React from "react";
import Axios from 'axios';
import "./login";
import  { useState } from "react";
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
  const handleLogout = () => {
    localStorage.clear("token");
    navigate("/");
    // Optionally, you can redirect the user to the login page or perform other actions
    // window.location.href = "/login";
};

const [businessName, setBusinessName] = useState('');
const [businessAddress, setBusinessAddress] = useState('');
const [website, setWebsite] = useState('');
const [industry, setIndustry] = useState('');
const [contactName, setContactName] = useState('');
const [contactNumber, setContactNumber] = useState('');
const [contactEmail, setContactEmail] = useState('');


const handleSubmit = async () => {
  try {
    const response = await Axios.post('http://localhost:4000/admin/authCustomer', {
      businessName,
      businessAddress,
      website,
      industry,
      contactName,
      contactNumber,
    contactEmail,
    });

    console.log('API Response:', response.status);
    if (response.status == 200) {
      setBusinessName("")
      setBusinessAddress("")
      setWebsite("")
      setIndustry("")
      setContactName("")
      setContactNumber("")
      setContactEmail("")
      
      // console.log("---")
      // navigate('/user');
    }


  } catch (error) {
    console.error('API Error:', error);
  }
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
              <li><a className="dropdown-item" href="#" onClick={handleLogout} ><img src={outImage}/> Logout</a></li>
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
            <input
              type="text"
              placeholder="Business Name"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Business Address"
              value={businessAddress}
              onChange={(e) => setBusinessAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <input
              type="text"
              placeholder="Industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
          </div>
          <div className="bg-white border-radius-15 information">
            <h5 className="text-primary">Contact information</h5>
            <input
              type="text"
              placeholder="Contact Name"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Contact Email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
          </div>
          <div className="submit-btn">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </section>
      <footer></footer>
    </div>
  );
}

export default DashBoard;
