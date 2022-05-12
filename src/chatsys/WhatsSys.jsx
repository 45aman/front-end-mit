import React, {useState, useEffect} from 'react'
import Logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import '../Event/StTimetable/TT.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSms, faEye, faTrashCan, faPenToSquare }  from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const WhatsSys = () => {

    const [Stu, getStu]= useState([]);


useEffect(() => {
    getAllStu();
}, []);

const getAllStu = () =>{
    axios.get(`http://localhost:4000/getstudent`) 
    .then((res)=>{
        const allStu = res.data;
        getStu(allStu);
        console.log(allStu);
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
    
    <div className='mt-5'>
    <div className='add_btn mt-2'>
            <a href="https://web.whatsapp.com/"><button className="btn"><strong className="item">whatsapp <FontAwesomeIcon icon={faSms} className="icon" /></strong></button></a>
        </div>
        <div className=''>
            
    
            <ReactHTMLTableToExcel
                        id="test-table-xls-button"
                        className="download-table-xls-button"
                        table="table-to-xls"
                        filename="tablexls"
                        sheet="tablexls"
                        buttonText="Download as XLS"/>
    
            <div>
            <table className="table" id="table-to-xls">
      <thead className="thead-dark">
        <tr className='table-dark'>
          <th scope="col">NAME</th>
          <th scope="col">MOBILE NO.</th>
    
        </tr>
      </thead>
      <tbody>
    
      
      {Stu.map((element)=>(
    
          <tr>
          <td>{element.studentname}</td>
          <td>{element.mobile}</td>
         
         
        </tr>
    
         
      
    
        ))}
      
      </tbody>
    </table>
    
            </div>
        </div>
    </div>
    
        </>  )
}

export default WhatsSys