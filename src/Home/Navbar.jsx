import React from 'react'
import Logo from '../img/logo.png'
import { Link } from 'react-router-dom'


const Navbar = (props) => {
    return (
        <>


{/*<div className="collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2
       mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link  to={`/studentprofile/${props.PRN}`}
            key={props.PRN}>POFILE</Link></a>
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
          <Link to={props.Email}  className="nav-link">EMAIL</Link>
        </li>
        
      </ul>
    </div>
        <nav className="navbar navbar-dark bg-dark static-top">
  <div className="container">
    <a className="navbar-brand" href="#">
    <Link to="/Sthome"> <img src={Logo} alt="..." height="50"/></Link>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>

    </button>
    
  </div>
</nav>*/}

<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
    <Link to="/Sthome"> <img src={Logo} alt="..." height="50"/></Link>
    </a>    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
      </ul>
      <span className="navbar-text">
      <ul className="navbar-nav mb-2
       mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link  to={`/studentprofile/${props.PRN}`}
            key={props.PRN}>POFILE</Link></a>
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
        <Link to={props.FAQ} className="nav-link active" aria-current="page" href="">FAQ</Link>
        </li>
        <li className="nav-item">
        <Link to={props.WHATSAPP} className="nav-link active" aria-current="page" href="#">WHATSAPP</Link>
        </li>
        <li className="nav-item">
          <Link to={props.Email}  className="nav-link">EMAIL</Link>
        </li>
        
      </ul>
      </span>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar
