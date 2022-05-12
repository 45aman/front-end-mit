import React, {useState, useEffect} from 'react'
import { render } from 'react-dom'


import Logo from '../StTimetable/logo.png'
import { Link } from 'react-router-dom'
import '../StTimetable/TT.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus, faEye, faTrashCan, faPenToSquare }  from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'



export default class Convo extends React.Component  {
   
  state = {  
    convos: []  
  }  
 

  componentDidMount() {  
    axios.get(`http://localhost:4000/getconvodata`)  
      .then(res => {  
        const convos = res.data;  
        this.setState({ convos });  
      })  
  }  




  deleteRow(id, e){  
    axios.delete(`http://localhost:4000/deleteconvo/${id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
        const convos = this.state.convos.filter(item => item.id !== id);  
        this.setState({ convos });  
      })  
    
  }  
render (){
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
    <div className=''>
        <div className='add_btn mt-2'>
            <Link to="/convoadd"><button className="btn"><strong className="item">ADD <FontAwesomeIcon icon={faCirclePlus} className="icon" /></strong></button></Link>
        </div>

        <div>
        <table className="table">
  <thead className="thead-dark">
    <tr className='table-dark'>
      <th scope="col">SR</th>
      <th scope="col">DEPARTMENT</th>
      <th scope="col">DATE</th>
      <th scope="col">TIME</th>
      <th scope="col">VENUE</th>

      <th scope="col">INVITATION</th>
      <th scope="col"></th>


    </tr>
  </thead>
  <tbody>

  
  {this.state.convos.map((element)=>(

      <tr>
      <th scope="row">{element.id}</th>
      <td>{element.department}</td>
      <td>{element.date}</td>
      <td>{element.time}</td>
      <td>{element.venue}</td>

      <td className='d-flex justify-content-between'>
       <a  href={element.invitation}> <button className="btn"><FontAwesomeIcon icon={faEye} className="icon" /></button></a>
      
        <button className="btn" onClick={(e) => this.deleteRow(element._id, e)}><FontAwesomeIcon icon={faTrashCan} className="icon"/></button>
      </td>
    </tr>

     
  

    ))}
  
  </tbody>
</table>

        </div>
    </div>
</div>

    </>
  )
}
}