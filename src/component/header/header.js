import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-BU bg-dark">
  {/* <a class="navbar-brand" href="#">Logo</a> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    {/* <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/">DashBoard</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to="/user">User</Link>
      </li>
     
    
    </ul> */}
  </div>
</nav> 

  )
}

export default Header