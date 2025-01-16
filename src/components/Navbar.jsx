import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg text-light bg-dark" style={{background:'transparent'}}>
  <div class="container-fluid">
    <Link to='/' style={{color:'#fff', fontWeight:'500'}} class="navbar-brand" >Utakarsha Murtadak</Link>
    <button class="navbar-toggler text-light bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon " style={{color:'black'}}></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to= '/' class="nav-link active" aria-current="page"  style={{color:'#fff'}}>Home</Link>
        </li>
        {/* <li class="nav-item">
          <Link class="nav-link active" aria-current="page"  style={{color:'#fff'}}>Services</Link>
        </li> */}
        <li class="nav-item dropdown">
          {/* <a style={{color:'#fff'}} class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a> */}
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to='/digital-marketing' class="dropdown-item" >Digital Marketing</Link></li>
            <li><Link class="dropdown-item" >Graphics Desiging</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" >Something else here</a></li>
          </ul>
        </li>
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar