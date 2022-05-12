import React from 'react'
import Logo from '../img/logo.png'
import { Link } from 'react-router-dom'


const Navbar = (props) => {
    return (
        <>
        <nav className="navbar navbar-dark bg-dark static-top">
  <div className="container">
    <a className="navbar-brand" href="#">
    <Link to="/Sthome"> <img src={Logo} alt="..." height="50"/></Link>
    </a>
    <button className="navbar" type="button" data-bs-toggle="" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-icon"></span>
    </button>
    <div className="navbar" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2
       mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">FEATURES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">EVENTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">REVIEVS</a>
        </li>
        <li className="nav-item">
        <Link to={props.FAQ} className="nav-link active" aria-current="page" href="#">FAQ</Link>
        </li>
        <li className="nav-item">
        <Link to={props.WHATSAPP} className="nav-link active" aria-current="page" href="#">WHATSAPP</Link>
        </li>
        <li className="nav-item">
          <Link to="/email"  className="nav-link">EMAIL</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar
