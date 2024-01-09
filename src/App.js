import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import LogoutButton from './pages/logout'
import './pages/login.css'
import  './pages/dashboard.css'
import DashBoard from './pages/dashboard';
import Header from './component/header/header';
import User from './pages/user';
import AuthenticatedRoute from './HOC/priveteRoures';
function App() {
  return (


<React.Fragment>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route element={<AuthenticatedRoute />}>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/user" element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
<LogoutButton/>
    </React.Fragment>
  );
}

export default App;
