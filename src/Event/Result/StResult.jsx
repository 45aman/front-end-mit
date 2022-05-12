import React, {useState, useEffect} from 'react'
import { render } from 'react-dom'


import Logo from '../StTimetable/logo.png'
import { Link } from 'react-router-dom'
import '../StTimetable/TT.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus, faEye, faTrashCan, faPenToSquare }  from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'



export default class StResult extends React.Component  {
   
  state = {  
    results: []  
  }  
 

  componentDidMount() {  
    axios.get(`http://localhost:4000/getresultdata`)  
      .then(res => {  
        const results = res.data;  
        this.setState({ results });  
      })  
  }  




  deleteRow(id, e){  
    axios.delete(`http://localhost:4000/deleteresult/${id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
        const results = this.state.results.filter(item => item.id !== id);  
        this.setState({ results });  
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
            <Link to="/resultadd"><button className="btn"><strong className="item">ADD <FontAwesomeIcon icon={faCirclePlus} className="icon" /></strong></button></Link>
        </div>

        <div>
        <table className="table">
  <thead className="thead-dark">
    <tr className='table-dark'>
      <th scope="col">SR</th>
      <th scope="col">DEPARTMENT</th>
      <th scope="col">TRIMESTER</th>
      <th scope="col">TYPE</th>
      <th scope="col">RESULT DATE</th>

      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>

  
  {this.state.results.map((element)=>(

      <tr>
      <th scope="row">{element.id}</th>
      <td>{element.department}</td>
      <td>{element.trimester}</td>
      <td>{element.type}</td>
      <td>{element.date}</td>

      <td className='d-flex justify-content-between'>
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