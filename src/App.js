import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import LogoutButton from './pages/login';
import Login from './pages/login';
import { Dashboard } from './pages/dashboard';
import AuthenticatedRoute from './HOC/priveteRoures';  // Correct the import path

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<AuthenticatedRoute />}>
            <Route path="/Dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
<Login/>
    </React.Fragment>
  );
}

export default App;
