import React, {useState, useEffect} from 'react'
import CertificateTable from './CertificateTable'
import { Link } from 'react-router-dom'
import Logo from './logo.png'
import {Pie, Bar, Doughnut} from 'react-chartjs-2'
import axios from 'axios'




const StCertificate = () => {

    const [Certi, getCerti]= useState([]);


useEffect(() => {
    getAllCerti();
}, []);

const getAllCerti = () =>{
    axios.get(`http://localhost:4000/app/getcertificate`) 
    .then((res)=>{
        const allCertis = res.data;
        getCerti(allCertis);
    }) 
.catch(error => console.error(`Error: $(error`));
}
   
  return (
      <>

      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<Link to="/Sthome"> <img src={Logo} alt="..." height="50"/></Link>

  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#"><span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"></a>
      </li>
    </ul>
    <span className="navbar-text">
TIMETABLE    </span>
  </div>
</nav>
      



      <div>
          <CertificateTable />
      </div>

      </>
  )
}

export default StCertificate