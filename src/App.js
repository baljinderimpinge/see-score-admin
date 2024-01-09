import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import DashBoard from './pages/dashboard';
import Header from './component/header/header';
import User from './pages/user';
function App() {
  return (
    <div className="App">
      <Router>
       {/* <Header/> */}
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/" element={<DashBoard />} />
          <Route path="/user" element={<User />} />

         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
