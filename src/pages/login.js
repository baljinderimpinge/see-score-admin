// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useAuth0 } from "@auth0/auth0-react";
// import './login.css';

// function Login(props) {
//     const { loginWithRedirect,user, isAuthenticated ,getIdTokenClaims, getAccessTokenSilently} = useAuth0();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Make the API request to your login endpoint
//       const response = await Axios.post('http://localhost:4000/admin/login', formData);

//       // Assuming your API returns a token in the response
//       const token = response.data.token;

//       // Do something with the token, such as storing it in local storage
//       localStorage.setItem('token', token);

//       // Redirect to the dashboard or another route
//       navigate('/dashboard');
//     } catch (error) {
//       // Handle login error, show a message, etc.
//       if (error.response && error.response.data && error.response.data.error) {
//         setError(error.response.data.error);
//       } else {
//         setError('An unexpected error occurred. Please try again later.');
//       }

//       console.error('Login failed:', error.message);
//     }
//   };

//   return (
//     <div className="Auth-form-container">
//       <form className="Auth-form" onSubmit={handleSubmit}>
//         <div className="Auth-form-content">
//           <h3 className="Auth-form-title">Welcome to our React admin</h3>
//           <div className="form-group mt-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="form-control mt-1"
//               placeholder="Enter email"
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               className="form-control mt-1"
//               placeholder="Enter password"
//             />
//           </div>
//           <div className="form-group mt-2">
//             <p>
//               or <a href="#">Sign up?</a>
//             </p>
//           </div>

//           <div className="d-grid gap-2 mt-3">
//             <button type="submit" className="btn btn-primary">
//               Log In
//             </button>
//           </div>
//           {error && <p className="error-message">{error}</p>}
//           <p className="forgot-password text-right">
//             Forgot <a href="#">password?</a>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;


import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {useNavigate } from 'react-router-dom';

const Login = () => {
  const { loginWithRedirect,user, isAuthenticated ,getIdTokenClaims, getAccessTokenSilently} = useAuth0();
  const navigate = useNavigate();
if(isAuthenticated){
  const fetchAndLogTokens = async () => {
    if (!isAuthenticated) {
      console.log("User is not authenticated");
      return;
    }

    try {
      const idToken = await getIdTokenClaims();
      const accessToken = await getAccessTokenSilently();

      if(idToken.__raw){
      localStorage.setItem("token",idToken.__raw)
        navigate('/Dashboard');
      }
  
    } catch (error) {
      console.error('Error fetching tokens:', error);
    }
  };
  fetchAndLogTokens();
}
  
  // Call the function to fetch and log tokens
    return (
      <button
        className="btn btn-primary mx-5 my-5 px-4"
        onClick={() =>
          loginWithRedirect({
            redirectUri: `${window.location.origin}`
          })
        }
      >
        Log In
      </button>
    );
  }
export default Login;
